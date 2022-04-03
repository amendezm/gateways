import { useGateways } from "./../hooks";

const GatewaysList = () => {
  const { gateways } = useGateways();

  return (
    <ul>
      {gateways.map(({ id, test }) => (
        <li key={id}>{`${id}:${test}`}</li>
      ))}
    </ul>
  );
};

export { GatewaysList };
