import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import flightPlanApi from "../api-service/flight-plan-api";
import { FlightPlan } from "../model/FlightPlan";
import { FlightPlanContextType } from "../model/FlightPlanContextType";
import { GeneralProviderProps } from "../model/GeneralProviderProps";
import { FlightPlanRouteData } from "../model/FlightPlanRouteData";

const DISPLAY_ALL_PATH = "/displayAll";
// const SEARCH_ROUTE_PATH = "/search/route";

export const FlightPlanContext = createContext<FlightPlanContextType | null>(null);

export const useFlightPlanContext = () => {
  const flightPlanContext = useContext(FlightPlanContext);
  if (!flightPlanContext) {
    throw new Error("useFlightPlanContext() must be used within a FlightPlanProvider")
  }
  return flightPlanContext;
}

export function FlightPlanProvider({ children }: GeneralProviderProps) {
    const [flightPlans, setFlightPlans] = useState<FlightPlan[]>([]);
    // const [flightPlanRouteData, setFlightPlanRouteData] = useState<FlightPlanRouteData>({});

    const handleDisplayAllFlightPlans = async () => {
      try {
        const response: AxiosResponse = await flightPlanApi.get(DISPLAY_ALL_PATH);
        const retrievedFlightPlans: FlightPlan[] = response.data;
        setFlightPlans(retrievedFlightPlans);
      } catch (error) {
        console.error(error);
      }
    }

    // const handleSelectFlightPlan = aysnc () => {
    //   try {
    //     const response: AxiosResponse = await flightPlanApi.get(SEARCH_ROUTE_PATH + selectFlightPlanId)
    //   } catch {

    //   }
    // }

    const contextValue = { flightPlans, handleDisplayAllFlightPlans }

    return (
      <FlightPlanContext.Provider value={contextValue}>
        { children }
      </FlightPlanContext.Provider>
    )
}