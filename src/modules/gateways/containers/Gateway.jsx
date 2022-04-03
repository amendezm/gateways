import { useEffect, useState } from "react";

import { GatewayForm } from "../components/GatewayForm";
import { GatewaysList } from "../components/GatewayList";
import { useGateways } from "./../hooks";

const Gateways = () => {
  const { gateways } = useGateways();
  const [gatewaysList, setGatewaysList] = useState(gateways);

  const updateList = (newGateway) => {
    setGatewaysList((gateways) => [...gateways, newGateway]);
  };

  useEffect(() => {
    setGatewaysList(gateways);
  }, [gateways]);

  return (
    <div className="gateways-container">
      <GatewayForm onSubmit={updateList} />
      <GatewaysList gateways={gatewaysList} />
    </div>
  );
};

export { Gateways };
