import axios from "axios";

// const LOCAL_BASE_URL = "http://localhost:8080/flight-plan";
// const flightPlanApi = axios.create({ baseURL: LOCAL_BASE_URL});

const PROD_BASE_URL = "https://flight-plan-server-5b865429270e.herokuapp.com/flight-plan";
const flightPlanApi = axios.create({ baseURL: PROD_BASE_URL});

export default flightPlanApi;