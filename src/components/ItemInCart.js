import React from "react";

import { ReactComponent as DeleteIcon } from "../assets/icons/trash-icon.svg";
import smallfood1 from "../assets/images/smallfood-1.png";

function ItemInCart({ image, name, price, qty }) {
  return (
    <div className="itemincart">
      <div className="itemincart__top">
        <div className="itemincart__top-imageinfo">
          <img
            src={image}
            alt=""
            className="itemincart__top-imageinfo--image"
          />
          <div className="itemincart__top-imageinfo--info">
            <h4 className="title">{name}</h4>
            <p className="price">${price}</p>
          </div>
        </div>
        <div className="itemincart__top--qty">{qty}</div>

        <p className="itemincart__top--totalprice">
          $ {(price * qty).toFixed(2)}
        </p>
      </div>

      <div className="itemincart__bottom">
        <input
          className="itemincart__bottom--note"
          placeholder="Order Note..."
        />

        <div className="itemincart__bottom--deleteicon">
          <DeleteIcon className="deleteicon__svg" />
        </div>
      </div>
    </div>
  );
}

export default ItemInCart;
