import { Grid2, Paper, Stack } from "@mui/material";
import FlightPlanList from "./FlightPlanList";
import FlightPlanSearchBox from "./FlightPlanSearchBox";
import SimpleMap from "./SimpleMap";

function FlightPlanDisplay() {
  return (
    <Paper 
      elevation={24}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
      }}
    >
      <Grid2 
        container
        sx={{
          width: "100%",
          height: "100%"
        }}
      >
        <Grid2 size={9}>
          <SimpleMap />
        </Grid2>
        <Grid2 size={3}>
          <Stack 
            spacing={1}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <FlightPlanSearchBox />
            <FlightPlanList />
          </Stack>
        </Grid2>
      </Grid2>
    </Paper>
  )
}

export default FlightPlanDisplay;