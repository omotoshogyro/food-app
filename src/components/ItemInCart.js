import React from "react";

import { ReactComponent as DeleteIcon } from "../assets/icons/trash-icon.svg";
import smallfood1 from "../assets/images/smallfood-1.png";

function ItemInCart() {
  return (
    <div className="itemincart">
      <div className="itemincart__top">

        <div className="itemincart__top-imageinfo">
          <img
            src={smallfood1}
            alt=""
            className="itemincart__top-imageinfo--image"
          />
          <div className="itemincart__top-imageinfo--info">
            <h4 className="title">Spicy seasoned sea...</h4>
            <p className="price">$ 2.29</p>
          </div>
        </div>
        <div className="itemincart__top--qty">2</div>
       
        <p className="itemincart__top--totalprice">$ 4,58</p>
      </div>

      <div className="itemincart__bottom">
        <input className="itemincart__bottom--note" placeholder="Please, just a little bit spicy only."/>
          
       
        <div className="itemincart__bottom--deleteicon">
          <DeleteIcon className="deleteicon__svg"/>
        </div>
      </div>
    </div>
  );
}

export default ItemInCart;
