import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useFlightPlanContext } from "../context/FlightPlanContext";

function FlightPlanList() {
  const flightPlanContext = useFlightPlanContext();
  const {
    sortedFlightPlans,
    handleDisplayAllFlightPlans,
    handleSelectedFlightPlan,
  } = flightPlanContext;

  const [selectedFlightPlanId, setSelectedFlightPlanId] = useState<string>("");

  useEffect(() => {
    handleDisplayAllFlightPlans();
  }, [])

  const handleFlightPlanClick = (flightPlanId: string) => {
    console.log(flightPlanId);
    setSelectedFlightPlanId(flightPlanId);
    handleSelectedFlightPlan(flightPlanId);
  }

  return (
    <Box component="section">
      <List 
        sx={{
          maxHeight: "60vh",
          overflow: "auto"
        }}
      >
        {sortedFlightPlans.map(flightPlan => (
          <ListItemButton 
            key={flightPlan._id}
            selected={selectedFlightPlanId === flightPlan._id}
            onClick={() => handleFlightPlanClick(flightPlan._id)}
          >
            <ListItemText primary={flightPlan.aircraftIdentification}/>
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

export default FlightPlanList;