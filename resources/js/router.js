import { createRouter, createWebHistory } from "vue-router";

import RegisterForm from "./components/register.vue";
import LoginForm from "./components/loginForm.vue";
import NavBar from "./components/NavBar.vue";
import ProductList from "./components/ProductList.vue";
import ProductItem from "./components/ProductItem.vue"; // Optional, if you need this as a separate page
import Cart from "./components/cart.vue";

// Define routes
const routes = [
    { path: "/register", component: RegisterForm },
    { path: "/login", component: LoginForm },
    { path: "/products", component: ProductList },
    { path: "/products/:id", component: ProductItem, props: true }, // Dynamic route for product details
    { path: "/navbar", component: NavBar },
    { path: "/cart", component: Cart },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

