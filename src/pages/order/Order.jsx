import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Order.css'
const Order = () => {
const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" placeholder="First name" id="" />
          <input type="text" name="" placeholder="Last name" id="" />
        </div>
        <input type="text" name="" placeholder="Email address" id="" />
        <input type="text" name="" placeholder="Street" id="" />
        <div className="multi-fields">
          <input type="text" name="" placeholder="City" id="" />
          <input type="text" name="" placeholder="State" id="" />
        </div>
        <div className="multi-fields">
          <input type="text" name="" placeholder="Zip code" id="" />
          <input type="text" name="" placeholder="Country" id="" />
        </div>
        <input type="text" name="" placeholder="Phone" id="" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default Order;
