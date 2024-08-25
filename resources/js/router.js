import { createRouter, createWebHistory } from "vue-router";

import RegistroForm from "./components/register.vue"
import Login from "./components/Login.vue"
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/Product.vue"
import Cart from "./components/cart.vue";

const routes = [
    { path: "/register", component: register},
    { path: "/Login", component: Login},
    { path: "/Product", component: Product},
    { path: "/Navbar", component: Navbar}
    { path: "/cart", component: Cart}

];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
