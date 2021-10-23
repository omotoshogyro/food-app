import React from 'react'
import foodedit1 from "../assets/images/foodedit-1.png"
import tinydot from "../assets/images/tinydot.png"

import { ReactComponent as EditICon } from "../assets/icons/edit-icon.svg"

function FoodEditBox({image}) {
    return (
        <div className="foodeditbox">
            <img src={image} alt="" className="foodeditbox__img" />

            <div className="foodeditbox__info">
                <div className="foodeditbox__info--desc">Spicy seasoned seafood noodles</div>
                <div className="foodeditbox__info--priceandavail">
                    <p className="foodeditbox--priceandavail-price">$ 2.29</p>
                    <img src={tinydot} alt="" />
                    <p className="foodeditbox--priceandavail-avail">20 Bowls</p>
                </div>
            </div>
            <button className="foodeditbox__btn"> <EditICon className="foodeditbox__btn--icon" />  Edit dish</button>
        </div>
    )
}

export default FoodEditBox
