import { AppBar, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
import './App.css'
import FlightPlanContainer from './component/FlightPlanContainer'
import { FlightPlanProvider } from './context/FlightPlanContext'
import SnackbarAlert from './component/SnackBarAlert'

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

function App() {
  return (
    <FlightPlanProvider>
      <ThemeProvider theme={theme}>
        <SnackbarAlert />
        <AppBar>
          <Toolbar sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
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
