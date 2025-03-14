import { FlightPlan } from "./FlightPlan";

export interface FlightPlanContextType {
  flightPlans: FlightPlan[],
  handleDisplayAllFlightPlans: () => Promise<void>
}