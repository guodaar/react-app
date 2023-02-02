import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";

export const HOME_PATH = "/";
export const PRODUCTS_PATH = `${HOME_PATH}:category`;
export const PRODUCT_PATH = `${PRODUCTS_PATH}/:productId`;

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
  ],
};
