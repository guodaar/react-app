import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const HOME_PATH = "/";
export const PRODUCTS_PATH = `${HOME_PATH}category/:category`;
export const PRODUCT_PATH = `${PRODUCTS_PATH}/:productId`;
export const CART = `/cart`;
export const LOGIN = "/login";
export const REGISTER = "/register";

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
      path: CART,
      Component: Cart,
    },
    {
      path: LOGIN,
      Component: Login,
    },
    {
      path: REGISTER,
      Component: Register,
    },
  ],
};
