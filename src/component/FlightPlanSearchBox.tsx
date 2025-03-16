import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useFlightPlanContext } from "../context/FlightPlanContext";

function FlightPlanSearchBox() {
  const flightPlanContext = useFlightPlanContext();
  const { handleSearchFlightPlans } = flightPlanContext;

  const [value, setValue] = useState("");

  return (
    <Box component="section">
      <TextField fullWidth
        label="Search"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSearchFlightPlans(event.target.value);
          setValue(event.target.value);
        }}
      />
    </Box>
  )
}

export default FlightPlanSearchBox;