import Product from "../pages/Product/Product"
import Home from "../pages/Home"
import Add from '../pages/Add'

export const publicRoutes = [
  { path:'/', component:Home},
  { path:'/add-phone', component:Add},
  { path:'/product/:id',component:Product}
]