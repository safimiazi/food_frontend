import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../rootLayout/Root";
import Cart from "../pages/cart/ShopCart";
import Order from "../pages/order/Order";
import Hi from "../pages/Hi/Hi";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/order",
                element: <Order/>
            },
            {
                path: "/hey",
                element: <Hi/>
            },
           
            
        ]
    }
])

export default router;