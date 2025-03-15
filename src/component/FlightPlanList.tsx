import { Box, Button, List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useFlightPlanContext } from "../context/FlightPlanContext";
import SnackbarAlert from "./SnackBarAlert";

function FlightPlanList() {
  const flightPlanContext = useFlightPlanContext();
  const {
    flightPlans,
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
    <Box>
      <SnackbarAlert />
      <Button onClick={handleDisplayAllFlightPlans}>Click Me!</Button>
      <List sx={{
        overflow: "auto"
      }}>
        {flightPlans.map(flightPlan => (
          <ListItemButton key={flightPlan._id}
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