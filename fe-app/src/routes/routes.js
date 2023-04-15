import Product from "../pages/Product/Product"
import Home from "../pages/Home"
import Add from '../pages/Add'
import Update from "../pages/Update/Update";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/admin", component: Add },
  { path: "/product/:id", component: Product },
  { path: "/update-product/:id", component: Update },
];