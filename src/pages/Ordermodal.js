import React, { useContext } from "react";

import { ReactComponent as LeftArrow } from "../assets/icons/leftarrow-icon.svg";
import { ReactComponent as AddPlus } from "../assets/icons/addplus-icon.svg";
import { ReactComponent as CreditCard } from "../assets/icons/creditcard-icon.svg";
import { ReactComponent as Paypal } from "../assets/icons/paypal-icon.svg";
import { ReactComponent as Wallet } from "../assets/icons/wallet-icon.svg";

import smallfood1 from "../assets/images/smallfood-1.png";
import smallfood2 from "../assets/images/smallfood-2.png";
import smallfood3 from "../assets/images/smallfood-3.png";
import smallfood4 from "../assets/images/smallfood-4.png";

import ItemInCart from "../components/ItemInCart";

import { GlobalProvider } from "../globalLayer/Provider";

function Orderpopup() {
  const { setModal } = useContext(GlobalProvider);

  return (
    <div className="ordermodal">
      {/* Confirmation Part */}

      <div className="confirmation">
        {/* icon */}

        <div className="confirmation__leftarrow">
          <LeftArrow className="leftarrow-icon" onClick={() => setModal(false)}/>
        </div>

        {/* Confirmation header and details */}
        <div className="confirmation__headerandplusicon">
          <div className="confirmation__headerandplusicon--text">
            <h3>Confirmation</h3>
            <p>Orders #34562</p>
          </div>
          <div className="confirmation__headerandplusicon--icon">
            <AddPlus className="addplus" />
          </div>
        </div>

        {/* Cart Lists */}
        <div className="cartlistoffoods">
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

        {/* Discount part */}
        <div className="confirmation__discounttotal">
          <div className="block">
            <p className="block__title">Discount</p>
            <p className="block__total">$0</p>
          </div>
          <div className="block">
            <p className="block__title">Sub total</p>
            <p className="block__total">$21.03</p>
          </div>
        </div>
      </div>

      {/* Thin Line */}
      <div className="thinline"></div>

      {/* Payment Part */}
      <div className="payment">
        {/* Header texts */}
        <div className="payment__header">
          <h3>Payment</h3>
          <p>3 payment method available</p>
        </div>

        {/* Payment Method */}
        <div className="payment__method">
          <h2>Payment Method</h2>

          <div className="methods">
            <div className="method">
              <div className="typeicon">
                <CreditCard />
              </div>
              <p>Credit Card</p>
            </div>
            <div className="method">
              <div className="typeicon">
                <Paypal />
              </div>
              <p>Paypal</p>
            </div>
            <div className="method">
              <div className="typeicon">
                <Wallet />
              </div>
              <p>Cash</p>
            </div>
          </div>

          <form action="" className="forms">
            <div className="cardinput">
              <label htmlFor="name" className="cardinput__label">
                Cardholder Name
              </label>
              <input type="text" className="cardinput__input" />
            </div>

            <div className="cardinput">
              <label htmlFor="name" className="cardinput__label">
                Card Number
              </label>
              <input type="text" className="cardinput__input" />
            </div>

            <div className="twoinput">
              <div className="cardinput">
                <label htmlFor="name" className="cardinput__label">
                  Expiration Date
                </label>
                <input type="text" className="cardinput__input" />
              </div>

              <div className="cardinput">
                <label htmlFor="name" className="cardinput__label">
                  CVV
                </label>
                <input type="password" className="cardinput__input" />
              </div>
            </div>
          </form>
          <div className="line"></div>

          <div className="doubleinput">
            <div className="cardinput">
              <label htmlFor="name" className="cardinput__label">
                Order Type
              </label>
              <select name="type" id="type">
                <option value="Dine In">Dine In</option>
                <option value="Dine In">To Go</option>
                <option value="Dine In">Delivery</option>
              </select>
            </div>

            <div className="cardinput">
              <label htmlFor="name" className="cardinput__label">
                Table no.
              </label>
              <input type="text" className="cardinput__input" />
            </div>
          </div>
        </div>

        {/* Cancel and confirm buttons */}

        <div className="payment__bottom-buttons">
          <button className="cancel-btn"
          onClick={() => setModal(false)}
          >Cancel</button>
          <button className="confirm-btn">Confirm Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Orderpopup;
