import { Alert, Snackbar } from "@mui/material";
import { useFlightPlanContext } from "../context/FlightPlanContext";

function SnackbarAlert() {

    const flightPlanContext = useFlightPlanContext();
    const {
      errorResponse,
      handleResetError
    } = flightPlanContext;

  const handleClose = () => {
    handleResetError();
  }

  return (
    <Snackbar 
      open={errorResponse.isError}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center"}}
    >
      <Alert 
        severity="error"
        onClose={handleClose}
      >
        {errorResponse.message}
      </Alert>
    </Snackbar>
  )
}

export default SnackbarAlert;