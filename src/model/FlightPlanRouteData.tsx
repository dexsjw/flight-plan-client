import { FlightPlan } from "./FlightPlan"

export interface FlightPlanRouteData extends FlightPlan {
    filedRoute: FiledRoute
}

export interface FiledRoute {
    routeElement: RouteElement[]
}

export interface RouteElement {
    position: Position,
    seqNum: number,
    airway: string
}

export interface Position {
    designatedPoint: string,
    pointCoordinate: string
}