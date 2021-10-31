import React, { useContext } from "react";
import MainNav from "../components/MainNav";
import Modal from "../components/Modal";
import OrderCart from "../components/OrderCart";
import ProductHome from "../components/ProductHome";
import { GlobalProvider } from "../globalLayer/Provider";

function HomePage() {
  const { name, modal, setModal } = useContext(GlobalProvider);
  // console.log(setModal, "here");
  return (
    <div className="homepage">
      {/* <Modal /> */}
      {modal && <Modal />}

      {/* Navigation Icon List */}
      {/* <MainNav /> */}

      {/* Product Section */}
      <ProductHome />

      {/*Cart Order Section */}
      <OrderCart />
    </div>
  );
}

export default HomePage;
