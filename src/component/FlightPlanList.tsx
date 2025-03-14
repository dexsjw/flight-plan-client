import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useFlightPlanContext } from "../context/FlightPlanContext";
import { useEffect, useState } from "react";

function FlightPlanList() {
  const flightPlanContext = useFlightPlanContext();
  const {flightPlans, handleDisplayAllFlightPlans} = flightPlanContext;

  const [selectFlightPlanId, setSelectedFlightPlanId] = useState<string>("");

  useEffect(() => {
    handleDisplayAllFlightPlans();
  }, [])



  return (
    <Box>
      <List>
        <ListItemButton>
          <ListItemText primary="Random Label"/>
        </ListItemButton>
      </List>
    </Box>
  )
}

export default FlightPlanList;