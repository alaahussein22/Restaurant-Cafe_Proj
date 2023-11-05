import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLogin from "../views/Auth/AppLogin.vue"
import AppRegister from "../views/Auth/AppRegister.vue"
import AddProduct from "../views/Products/AddProduct.vue"

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/register',
    name: 'AppRegister',
    component: AppRegister
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router