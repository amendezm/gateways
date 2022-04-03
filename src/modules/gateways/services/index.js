import { get, post } from "../../../api/api";

const getGateways = () => get("/gateways");

const createGateway = (body) => post("/gateways", body);

export { getGateways, createGateway };
