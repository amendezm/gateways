import { getGateways } from "../services";
import { useState, useEffect } from "react";

const useGateways = () => {
  const [gateways, setGateways] = useState([]);

  const fetchData = async () => {
    const gateways = await getGateways();
    const data = await gateways.json();
    setGateways(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { gateways };
};

export { useGateways };
