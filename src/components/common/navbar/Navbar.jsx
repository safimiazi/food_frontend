/* eslint-disable react/prop-types */
import { useState } from "react";
import { assets } from "../../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ setLoginPopup, cartItemCount }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link to={'/'}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>

          {cartItemCount > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setLoginPopup(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
