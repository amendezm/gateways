import { useState } from "react";
import { v4 } from "uuid";

import { createGateway } from "./../services";

const GatewayForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    const body = { id: v4(), name, address, devices: [] };
    setIsSubmitting(true);
    createGateway(body)
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
        setIsSubmitting(false);
      })
      .catch(() => {
        console.error("Submit failed");
        setIsSubmitting(false);
      });
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        id="gatewayName"
        onChange={handleNameChange}
      />
      <input
        type="text"
        name="ipAddress"
        id="gatewayAddress"
        onChange={handleAddressChange}
      />
      <button onClick={handleSubmit} disabled={isSubmitting}>
        Create
      </button>
    </form>
  );
};

export { GatewayForm };
