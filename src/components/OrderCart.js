import React from "react";
import ItemInCart from "./ItemInCart";

function OrderCart() {
  return (
    <div className="ordercart">
      {/* order cart header part */}
      <div className="ordercart__header">
        <h2 className="ordercart__header--text">Orders #34562</h2>

        {/* Dine Togo Delivery btns */}

        <div className="ordercart__header--typelist">
          <ul>
            <li>Dine In</li>
            <li>To Go</li>
            <li>Delivery</li>
          </ul>
        </div>

        {/* Order lists headers */}

        <div className="ordercart__header--titleheaders">
          <ul>
            <li>Item</li>
            <li>Qty</li>
            <li>Price</li>
          </ul>
        </div>
      </div>

      <div className="ordercart__itemscontainer">
        <ItemInCart />
        <ItemInCart />
        <ItemInCart />
        <ItemInCart />
      </div>

      <div className="ordercart__discounttotalandpaybtn">
        <div className="ordercart__discounttotalandpaybtn--discounttotal">
          <div className="block">
            <p className="block__title">Discount</p>
            <p className="block__total">$0</p>
          </div>
          <div className="block">
            <p className="block__title">Sub total</p>
            <p className="block__total">$21.03</p>
          </div>
        </div>

        <button className="ordercart__discounttotalandpaybtn--btn">
        Continue to Payment
        </button>
        
      </div>
    </div>
  );
}

export default OrderCart;
