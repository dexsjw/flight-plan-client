import axios from "axios";

const LOCAL_BASE_URL = "http://localhost:8080/flight-plan";

const flightPlanApi = axios.create({ baseURL: LOCAL_BASE_URL});

export default flightPlanApi;