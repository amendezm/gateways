const GatewaysBar = ({ handleButtonClisk }) => (
  <div className="gateways-bar">
    <div className="filters"></div>
    <button className="gateways-bar_button" onClick={handleButtonClisk}>
      Add gateway
    </button>
  </div>
);

export { GatewaysBar };
