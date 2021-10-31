import React from "react";
import customer1 from "../assets/images/customer-1.png";

function OrderProfile({ image, name, menu, price, status }) {
  const statusCheck = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "completed";
      case "preparing":
        return "preparing";
      case "pending":
        return "pending";

      default:
        return "pending";
    }
  };

  return (
    <div className="orderprofile">
      <div className="orderprofile__customer">
        <img src={image} alt={name} className="orderprofile__customer--image" />
        <p className="orderprofile__customer--name">{name}</p>
      </div>
      <p className="orderprofile__menu">{menu}</p>
      <p className="orderprofile__price">${price}</p>
      <p className={`orderprofile__status ${statusCheck(status)}`}>{status}</p>
    </div>
  );
}

export default OrderProfile;
