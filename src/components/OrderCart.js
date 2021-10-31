import React, { useContext } from "react";
import ItemInCart from "./ItemInCart";

import smallfood1 from "../assets/images/smallfood-1.png";
import smallfood2 from "../assets/images/smallfood-2.png";
import smallfood3 from "../assets/images/smallfood-3.png";
import smallfood4 from "../assets/images/smallfood-4.png";

import { GlobalProvider } from "../globalLayer/Provider";

function OrderCart() {
  const { setModal } = useContext(GlobalProvider);

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
        <ItemInCart
          image={smallfood1}
          name="Spicy seasoned sea..."
          price="2.29"
          qty="2"
          
        />
        <ItemInCart
        image={smallfood2}
        name="Salted pasta with mu..."
        price="2.69"
        qty="1"
        
         />
        <ItemInCart 
        image={smallfood3}
        name="Spicy instant noodle..."
        price="3.49"
        qty="3"
        />
        <ItemInCart 
          image={smallfood4}
          name='Healthy noodle with ...'
          price="3.29"
          qty="1"
        />
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

        <button
          className="ordercart__discounttotalandpaybtn--btn"
          onClick={() => setModal(true)}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

export default OrderCart;
