import { Box, Grid2, Paper, Stack } from "@mui/material";
import FlightPlanSearchBox from "./FlightPlanSearchBox";
import FlightPlanList from "./FlightPlanList";
import SimpleMap from "./SimpleMap";

function FlightPlanDisplay() {
  return (
    <Paper elevation={24}>
      <Box component="section"
        sx={{
          width: 1500,
          height: 650
        }}>
        <Grid2 container>
          <Grid2 size={9}>
            <SimpleMap />
          </Grid2>
          <Grid2 size={3}>
            <Stack spacing={1}>
              <FlightPlanSearchBox />
              <FlightPlanList />
            </Stack>
          </Grid2>
        </Grid2>
      </Box>
    </Paper>
  )
}

export default FlightPlanDisplay;