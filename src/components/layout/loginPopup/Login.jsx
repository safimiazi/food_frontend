/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Login.css";
import { assets } from "../../../assets/assets";
const Login = ({ setLoginPopup }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setLoginPopup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input required type="text" name="" placeholder="Your name" id="" />
          )}
          <input required type="email" name="" placeholder="Your Email" id="" />
          <input
            required
            type="password"
            name=""
            placeholder="password"
            id=""
          />
        </div>
        <button> {currState === "Sign Up" ? "create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" required id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
