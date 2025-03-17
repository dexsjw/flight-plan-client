import { Box, Button, CircularProgress, List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useFlightPlanContext } from "../context/FlightPlanContext";

function FlightPlanList() {
  const flightPlanContext = useFlightPlanContext();
  const {
    sortedFlightPlans,
    handleDisplayAllFlightPlans,
    handleSelectedFlightPlan,
    handleResetSelectedFlightPlan,
    isLoading
  } = flightPlanContext;

  const [selectedFlightPlanId, setSelectedFlightPlanId] = useState<string>("");

  useEffect(() => {
    handleDisplayAllFlightPlans();
  }, [])

  const handleFlightPlanClick = (flightPlanId: string) => {
    setSelectedFlightPlanId(flightPlanId);
    handleSelectedFlightPlan(flightPlanId);
  }

  return (
    <Box 
      component="section"
      sx={{
        width: "100%",
        height: "60vh"
      }}
    >
      {isLoading && <CircularProgress 
        size={75}
        sx={{
          marginTop: 20
        }} 
      />}
      {!isLoading && 
        <Box component="section">
          <Button 
            variant="contained"
            onClick={handleResetSelectedFlightPlan}
          >
            Reset
          </Button>
          <List 
            sx={{
              maxHeight: "50vh",
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
      }
    </Box>
  )
}

export default FlightPlanList;