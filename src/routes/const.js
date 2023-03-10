import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Checkout/Checkout";

export const HOME_PATH = "/";
export const PRODUCTS_PATH = `${HOME_PATH}category/:category`;
export const PRODUCT_PATH = `${PRODUCTS_PATH}/:productId`;
export const CART_PATH = `/cart`;
export const LOGIN_PATH = "/login";
export const REGISTER_PATH = "/register";
export const CHECKOUT_PATH = "/checkout";

export const mainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_PATH,
      Component: Home,
    },
    {
      path: PRODUCTS_PATH,
      Component: Products,
    },
    {
      path: PRODUCT_PATH,
      Component: Product,
    },
    {
      path: CART_PATH,
      Component: Cart,
    },
    {
      path: LOGIN_PATH,
      Component: Login,
    },
    {
      path: REGISTER_PATH,
      Component: Register,
    },
    {
      path: CHECKOUT_PATH,
      Component: Checkout,
    },
  ],
};
