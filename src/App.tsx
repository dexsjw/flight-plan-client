import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import './App.css'
import FlightPlanContainer from './component/FlightPlanContainer'
import SnackbarAlert from './component/SnackbarAlert'
import { FlightPlanProvider } from './context/FlightPlanContext'

const theme = createTheme({
  palette: {
    primary: {
      main: "#bb016e"
    },
    secondary: {
      main: "#2038a0"
    }
  }
})

function App() {
  return (
    <FlightPlanProvider>
      <ThemeProvider theme={theme}>
        <SnackbarAlert />
        <AppBar>
          <Toolbar 
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="h3"
              align="center">
                FLIGHT PLAN VIEWER
            </Typography>
          </Toolbar>
        </AppBar>
        <FlightPlanContainer />
      </ThemeProvider>
    </FlightPlanProvider>
  )
}

export default App
