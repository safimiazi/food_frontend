import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";
import { useContext, useEffect, useState } from "react";
import Login from "../components/layout/loginPopup/Login";
import { StoreContext } from "../context/StoreContext";

const Root = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const { cartItems } = useContext(StoreContext);
console.log(cartItems)
  const cartItemCount = Object.values(cartItems).reduce((pre, curr) => pre + curr, 0);

console.log("object", cartItemCount)
  useEffect(()=> {
if(loginPopup){
  document.body.style.overflow = "hidden";
}else{
  document.body.style.overflow = "auto"
}
},[loginPopup])


  return (
    <>
      {loginPopup ? <Login setLoginPopup={setLoginPopup} /> : <></>}
      <div className="app">
        <Navbar setLoginPopup={setLoginPopup} cartItemCount={cartItemCount}/>
        <div style={{minHeight: '37vh'}} className="outlet">
        <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Root;
