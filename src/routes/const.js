import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

export const HOME_PATH = "/";
export const PRODUCTS_PATH = "/:category";

export const routes = [
  {
    path: HOME_PATH,
    Component: Home,
  },
  {
    path: PRODUCTS_PATH,
    Component: Products,
  },
];
