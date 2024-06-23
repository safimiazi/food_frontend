/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return <FoodItem item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
