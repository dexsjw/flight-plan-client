import { Box, Container } from "@mui/material";
import FlightPlanDisplay from "./FlightPlanDisplay";

function FlightPlanContainer() {
  return (
    <Container 
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "space-evenly"
      }}
    >
      <Box 
        component="section"
        sx={{
          width: "90vw",
          height: "75vh",
          maxWidth: "90vw",
          maxHeight: "75vh"
        }}
      >
        <FlightPlanDisplay />
      </Box>
    </Container>
  )
}

export default FlightPlanContainer;