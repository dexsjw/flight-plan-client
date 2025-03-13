import { AppBar, Box, Container, createTheme, ThemeProvider, Toolbar, Typography } from "@mui/material";
import FlightPlanDisplay from "./FlightPlanDisplay";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2038a0"
    },
    secondary: {
      main: "#e80078"
    }
  }
})

function FlightPlanContainer() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl"
        sx={{
          display: "flex"
        }}>
          <AppBar>
            <Toolbar sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Typography variant="h3"
                align="center"
                >
                FLIGHT PLAN VIEWER
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="section"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "90%"
            }}>
            <FlightPlanDisplay />
          </Box>
      </Container>
    </ThemeProvider>
  )
}

export default FlightPlanContainer;