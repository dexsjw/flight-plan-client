import { FlightPlan } from "../model/FlightPlan";
import flightPlanApi from "./flight-plan-api";

const DISPLAY_ALL_PATH = "/displayAll";
const SEARCH_ROUTE_PATH = "/search/route"

export const displayAllFlightPlan = async () => {
    try {
        const response = await flightPlanApi.get(DISPLAY_ALL_PATH);
    } catch (error) {
        console.error(error);
    }
}