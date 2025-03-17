import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import flightPlanApi from "../api-service/flight-plan-api";
import { ContextProviderProps } from "../model/ContextProviderProps";
import { FlightPlan } from "../model/FlightPlan";
import { FlightPlanContextType } from "../model/FlightPlanContextType";
import { FlightPlanRouteData } from "../model/FlightPlanRouteData";
import { ErrorResponse } from "../model/ErrorResponse";

const DISPLAY_ALL_PATH = "/displayAll";
const SEARCH_ROUTE_PATH = "/search/route/";

const initialFlightPlanRouteDataState: FlightPlanRouteData = {
  _id: "",
  aircraftIdentification: "",
  filedRoute: {
    routeElement: []
  }
}

export const initialErrorResponseState: ErrorResponse = {
  isError: false,
  severity: "",
  status: 0,
  message: ""
}

export const FlightPlanContext = createContext<FlightPlanContextType | null>(null);

export const useFlightPlanContext = () => {
  const flightPlanContext = useContext(FlightPlanContext);
  if (!flightPlanContext) {
    throw new Error("useFlightPlanContext() must be used within a FlightPlanProvider")
  }
  return flightPlanContext;
}

export function FlightPlanProvider({ children }: ContextProviderProps) {
    const [flightPlans, setFlightPlans] = useState<FlightPlan[]>([]);
    const [sortedFlightPlans, setSortedFlightPlans] = useState<FlightPlan[]>([]);
    const [flightPlanRouteData, setFlightPlanRouteData] = useState<FlightPlanRouteData>(initialFlightPlanRouteDataState);
    const [errorResponse, setErrorResponse] = useState<ErrorResponse>(initialErrorResponseState);
    const [isLoading, setIsLoading] = useState(false);

    const handleDisplayAllFlightPlans = async () => {
      setIsLoading(true);
      try {
        const response: AxiosResponse = await flightPlanApi.get(DISPLAY_ALL_PATH);
        const retrievedFlightPlans: FlightPlan[] = response.data;
        setFlightPlans(retrievedFlightPlans);
        setSortedFlightPlans(retrievedFlightPlans);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          setErrorResponse({
            isError: true,
            severity: "error",
            status: error.status,
            message: error.message
          })
        } else {
          console.error("Error is not an AxiosError: ", error);
          setErrorResponse(prevState => {
            return {
              ...prevState,
              isError: true,
              message: "Error is not an AxiosError"
            }
          })
        }
      } finally {
        setIsLoading(false);
      }
    }

    const handleSelectedFlightPlan = async (selectedFlightPlanId: string) => {
      setIsLoading(true);
      console.info("selectedFlightPlanId: ", selectedFlightPlanId);
      try {
        const response: AxiosResponse = await flightPlanApi.get(SEARCH_ROUTE_PATH + selectedFlightPlanId)
        const retrievedFlightPlanRouteData: FlightPlanRouteData = response.data;
        setFlightPlanRouteData(retrievedFlightPlanRouteData);
        if (!retrievedFlightPlanRouteData.filedRoute) {
          setErrorResponse(prevState => {
            return {
              ...prevState,
              isError: true,
              message: "There is no filed route for this flight"
            }
          })
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          setErrorResponse({
            isError: true,
            severity: "error",
            status: error.status,
            message: error.message
          })
        } else {
          console.error("Error is not an AxiosError: ", error);
          setErrorResponse(prevState => {
            return {
              ...prevState,
              isError: true,
              message: "Error is not an AxiosError"
            }
          })
        }
      } finally {
        setIsLoading(false);
      }
    }
    
    const handleResetSelectedFlightPlan = () => {
      setFlightPlanRouteData(initialFlightPlanRouteDataState);
    }

    const handleSearchFlightPlans = (searchTerm: string) => {
      setSortedFlightPlans(() => {
        return flightPlans.filter(flightPlan => flightPlan.aircraftIdentification.includes(searchTerm));
      })
    }

    const handleResetError = () => {
      setErrorResponse(initialErrorResponseState);
    }

    const contextValue = {
      flightPlans,
      sortedFlightPlans,
      flightPlanRouteData,
      handleDisplayAllFlightPlans,
      handleSelectedFlightPlan,
      handleResetSelectedFlightPlan,
      handleSearchFlightPlans,
      errorResponse,
      handleResetError,
      isLoading
    }

    return (
      <FlightPlanContext.Provider value={contextValue}>
        { children }
      </FlightPlanContext.Provider>
    )
}