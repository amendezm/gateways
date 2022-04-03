import { get } from "../api/api";

const getGateways = () => get("/gateways");

export { getGateways };
