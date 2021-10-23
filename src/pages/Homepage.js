import React from "react";
import MainNav from "../components/MainNav";
import OrderCart from "../components/OrderCart";
import ProductHome from "../components/ProductHome";

function HomePage() {
  return (
    <div className="homepage">
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
