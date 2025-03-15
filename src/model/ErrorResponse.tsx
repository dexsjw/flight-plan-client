export interface ErrorResponse {
  isError: boolean,
  status: number | undefined,
  message: string,
  // response: unknown
}