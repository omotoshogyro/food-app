import React from "react";
import FoodBox from "./FoodBox";
import FoodTypeList from "./FoodTypeList";  
import food1 from "../assets/images/food-1.png"
import food2 from "../assets/images/food-2.png"
import food3 from "../assets/images/food-3.png"
import food4 from "../assets/images/food-4.png"
import food5 from "../assets/images/food-5.png"
import food6 from "../assets/images/food-6.png"

function ProductHome() {
  return (
    <div className="productpage">

      {/* Header name and input */}
      <div className="productpage__headpart">
        <div className="productheader">
          <div className="productheader__detail">
            <h2 className="productheader__detail--name">Jaegar Resto</h2>
            <p className="productheader__detail--date">Tuesday, 2 Feb 2021</p>
          </div>
          <input
            type="text"
            className="productheader__input"
            placeholder="Search for food, coffe, etc.."
          />
        </div>

        {/* Food type selection */}
        <FoodTypeList />
        
      </div>

      {/* Choose dishes and select form */}

      <div className="choosebtn">
          <label for="choosebtn__dish" className="choosebtn__text">
          Choose Dishes
          </label>

            

          <select name="choosebtn__dish" className="choosebtn__select">
              <option value="volvo">Dine In</option>
              <option value="To Go">To Go</option>
              <option value="Delivery">Delivery</option>
          </select>

      </div>

      {/* List of foods components */}
      <div className="food__boxes">

        <FoodBox 
        img={food1}
        desc="Spicy seasoned seafood noodles"
        price="2.29"
        numAvailable="20"
        />
        <FoodBox 
        img={food2}
        desc="Salted Pasta with mushroom sauce"
        price="2.29"
        numAvailable="11"
        />
        <FoodBox 
        img={food3}
        desc="Beef dumpling in hot and sour soup"
        price="2.29"
        numAvailable="16"
        />
        <FoodBox 
        img={food4}
        desc="Healthy noodle with spinach leaf"
        price="3.29"
        numAvailable="22"
        />
        <FoodBox 
        img={food5}
        desc="Hot spicy fried rice with omelet"
        price="3.49"
        numAvailable="13"
        />
        <FoodBox 
        img={food6}
        desc="Spicy instant noodle with special omelette"
        price="3.59"
        numAvailable="17"
        />

      </div>

    </div>
  );
}

export default ProductHome;
