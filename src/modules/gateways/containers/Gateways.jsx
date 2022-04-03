import { useEffect, useState } from "react";
import { Modal } from "../../../components/Modal";

import { GatewayForm } from "../components/GatewayForm";
import { GatewaysList } from "../components/GatewayList";
import { GatewaysBar } from "../components/GatewaysBar";
import { useGateways } from "../hooks";

const Gateways = () => {
  const { gateways } = useGateways();
  const [gatewaysList, setGatewaysList] = useState(gateways);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateList = (newGateway) => {
    setGatewaysList((gateways) => [...gateways, newGateway]);
  };

  useEffect(() => {
    setGatewaysList(gateways);
  }, [gateways]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gateways-page">
      <div className="gateways-container">
        <GatewaysBar handleButtonClisk={openModal} />
        <GatewaysList gateways={gatewaysList} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <GatewayForm afterSubmit={updateList} />
      </Modal>
    </div>
  );
};

export { Gateways };
