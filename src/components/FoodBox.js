
import React from 'react';




function FoodBox({img, desc, price, numAvailable}) {
    return (
        <div className="foodbox">
            <div className="foodbox__item">
                <img src={img} alt="food 1"  className="foodbox__item--image"/>
                <h3 className="foodbox__item--desc">
                {desc}
                </h3>
                <p className="foodbox__item--price">$ {price}</p>
                <p className="foodbox__item--available">{numAvailable} Bowls available</p>
            </div>
        </div>
    )
}

export default FoodBox
