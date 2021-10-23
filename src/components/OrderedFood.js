import React from "react";


function OrderedFood({image, name, qty}) {
  return (
    <div className="orderedfood">
      <img src={image} alt="" className="orderedfood__image" />

      <div className="orderedfood__info">
        <p className="orderedfood__info--title">
          {name}
        </p>
        <p className="orderedfood__info--unitordered">{qty} dishes ordered</p>
      </div>
    </div>
  );
}

export default OrderedFood;
