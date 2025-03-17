import { Box } from "@mui/material";
import { Annotation, ComposableMap, Geographies, Geography, Line, Marker, ZoomableGroup } from "react-simple-maps";
import geoData from "../assets/countries-110m.json";
import { useFlightPlanContext } from "../context/FlightPlanContext";
import { FlightPlanRouteData, SimpleMapData, RouteElement } from "../model/FlightPlanRouteData";
import { useEffect, useState } from "react";

// Line coordinates change
const UNKNOWN_POINT: string = "UNKNOWN";
const markerOffset: number = 15;

function SimpleMap() {
  const flightPlanContext = useFlightPlanContext();
  const { flightPlanRouteData } = flightPlanContext;

  const [zoomCenter, setZoomCenter] = useState<[longitude: number, latitude: number]>([103.81, 1.35]);
  const [simpleMapDataArray, setMapDataArray] = useState<SimpleMapData[]>([]);
  const [lineCoordinateArray, setLineCoordinateArray] = useState<[longitude: number, latitude: number][]>([]);

  useEffect(() => {
    if (flightPlanRouteData.filedRoute?.routeElement) {
      setMapDataArray(handleFlightPlanRouteData(flightPlanRouteData));
    }
  }, [flightPlanRouteData]);


  const handleFlightPlanRouteData = (flightPlanRouteData: FlightPlanRouteData): SimpleMapData[] => {
    const markerDataArr: SimpleMapData[] = [];

    flightPlanRouteData.filedRoute.routeElement.map(routeElement => {
      markerDataArr.push(extractMarkerData(routeElement));
    })

    populateLineCoordinateArray(markerDataArr);
    populateZoomCenter(markerDataArr);

    console.log(markerDataArr);
    return markerDataArr;
  }

  const extractMarkerData = (routeElement: RouteElement): SimpleMapData => {
    if (routeElement.pointCoordinate) {
      const { pointCoordinate } = routeElement;
      const pointData: string[] = pointCoordinate.split(" ");
      const coordinates: string[] = pointData[1].substring(1, pointData[1].length - 1).split(",");
      return {
        airway: routeElement.airway,
        point: pointData[0],
        longitude: parseFloat(coordinates[1]),
        latitude: parseFloat(coordinates[0])
      }
    } else {
      return {
        airway: routeElement.airway,
        point: UNKNOWN_POINT,
        longitude: 0,
        latitude: 0
      }
    }
  }

  const populateLineCoordinateArray = (markerDataArr: SimpleMapData[]) => {
    const lineCoordinates: [longitude: number, latitude: number][] = [];
    markerDataArr.map(markerData => {
      lineCoordinates.push([markerData.longitude, markerData.latitude]);
    })
    console.log(lineCoordinates);
    setLineCoordinateArray(lineCoordinates);
  }

  const populateZoomCenter = (markerDataArr: SimpleMapData[]) => {
    if (markerDataArr.length > 0 && markerDataArr[0].point !== UNKNOWN_POINT) {
      const {longitude, latitude} = markerDataArr[0];
      setZoomCenter([longitude , latitude]);
    } else {
      setZoomCenter([103.81, 1.35]);
    }
  }

  return (
    <Box 
      component="section"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
      }}
    >
      <ComposableMap 
        height={400}
        projection="geoMercator"
        projectionConfig={{
          scale: 1000
        }}
      >
        <ZoomableGroup
          center={zoomCenter}
          zoom={0.5}
          minZoom={0.1}
        >
          <Geographies geography={geoData}>
            {({ geographies }) => {
              return geographies.map(geo => (
                <Geography 
                  key={geo.rsmKey} 
                  geography={geo}
                  fill="#2038a0"
                  stroke="#FFFFFF"
                />
              ))
            }}
          </Geographies>
          {simpleMapDataArray.map(simpleMapData => (
            <Marker
              key={simpleMapData.point}
              coordinates={[simpleMapData.longitude, simpleMapData.latitude]}
            >
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {simpleMapData.point}
              </text>
            </Marker>
          ))}
          <Line 
            coordinates={lineCoordinateArray}
            stroke="#2fa6eb"
            strokeWidth={5}
          />
          {simpleMapDataArray.map(simpleMapData => (
            <Annotation
              subject={[simpleMapData.longitude, simpleMapData.latitude]}
              dx={-90}
              dy={-30}
              connectorProps={{
                stroke: "#FF5533",
                strokeWidth: 3,
                strokeLinecap: "round"
              }}
            >
              <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                {simpleMapData.airway}
              </text>
            </Annotation>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  )
}

export default SimpleMap;