import { ErrorResponse } from "./ErrorResponse";
import { FlightPlan } from "./FlightPlan";
import { FlightPlanRouteData } from "./FlightPlanRouteData";

export interface FlightPlanContextType {
  flightPlans: FlightPlan[],
  flightPlanRouteData: FlightPlanRouteData,
  handleDisplayAllFlightPlans: () => Promise<void>,
  handleSelectedFlightPlan: (selectedFlightPlanId: string) => Promise<void>,
  errorResponse: ErrorResponse
  handleResetError: () => void
}