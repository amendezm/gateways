import { useState } from "react";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";

import { createGateway } from "./../services";

const GatewayForm = ({ afterSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const onSubmit = () => {
    const body = { id: v4(), name, address, devices: [] };
    setIsSubmitting(true);
    createGateway(body)
      .then((response) => response.json())
      .then((data) => {
        afterSubmit(data);
        setName("");
        setAddress("");
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
        {...register("name", { required: true, maxLength: 30 })}
        onChange={handleNameChange}
      />
      {errors.name && <span className="error">Name is required</span>}
      <input
        type="text"
        name="ipAddress"
        id="gatewayAddress"
        {...register("ipAddress", {
          required: true,
          pattern:
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        })}
        onChange={handleAddressChange}
      />
      {errors.ipAddress &&
        (errors.ipAddress?.type === "pattern" ? (
          <span className="error">Must be a valid IP</span>
        ) : (
          <span className="error">IP address is required</span>
        ))}
      <button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
        Create
      </button>
    </form>
  );
};

export { GatewayForm };
