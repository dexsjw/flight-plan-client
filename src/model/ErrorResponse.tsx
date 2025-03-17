export interface ErrorResponse {
  isError: boolean,
  severity: string,
  status: number | undefined,
  message: string,
  // response: unknown
}