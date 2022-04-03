const GatewaysList = ({ gateways }) => (
  <ul>
    {gateways.map(({ id, name }) => (
      <li key={id}>{`${id}:${name}`}</li>
    ))}
  </ul>
);

export { GatewaysList };
