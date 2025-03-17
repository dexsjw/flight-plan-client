import { FlightPlan } from "./FlightPlan"

export interface FlightPlanRouteData extends FlightPlan {
  filedRoute: FiledRoute
}

export interface FiledRoute {
  routeElement: RouteElement[]
}

export interface RouteElement {
  position?: Position,
  seqNum: number,
  airway: string,
  pointCoordinate: string
}

export interface Position {
  designatedPoint: string
}

export interface SimpleMapData {
  airway: string,
  point: string,
  longitude: number,
  latitude: number
}