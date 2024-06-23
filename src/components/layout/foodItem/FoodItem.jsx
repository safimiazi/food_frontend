/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./FoodItem.css";
import { assets } from "../../../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";

const FoodItem = ({ item }) => {
  const { name, description, image, price, _id } = item;
const {addToCart, removeFromCart, cartItems} = useContext(StoreContext)

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() => addToCart(_id) }
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img  onClick={()=> removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[_id]}</p>
            <img  onClick={()=> addToCart(_id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <div className="food-item-description">
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
