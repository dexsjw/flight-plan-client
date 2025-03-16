import { Box } from "@mui/material";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import geoData from "../assets/countries-110m.json";

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function SimpleMap() {

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
          zoom={0.1}
          minZoom={0.1}
        >
          <Geographies geography={geoData}>
            {({ geographies }) => {
              return geographies.map(geo => (
                <Geography key={geo.rsmKey} 
                  geography={geo}

                />
              ))
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  )
}

export default SimpleMap;

// import { Box } from "@mui/material";
// import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
// // import geoData from "../assets/ne_10m_admin_0_countries.json";

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// function SimpleMap() {
//   // console.log(geoData); // Debugging check

//   return (
//     <Box component="section"
//       sx={{
//         width: 1000,
//         height: 1000
//       }}
//     >
//       <ComposableMap
//         projection="geoMercator"
//         projectionConfig={{ scale: 150 }} // Increased scale
//       >
//         <ZoomableGroup>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill="#FF5533"
//                   stroke="#000000"
//                 />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//     </Box>
//   );
// }

// export default SimpleMap;