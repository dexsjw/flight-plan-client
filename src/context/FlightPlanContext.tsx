import { createContext, useState } from "react";

export const FlightPlanContext = createContext();

export function FlightPlanProvider({ children }) {
    const [flightPlanRouteData, setFlightPlanRouteData] = useState({});

    
}