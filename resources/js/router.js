import { createRouter, createWebHistory } from "vue-router";

import register from "./components/registroForm.vue"
import login from "./components/loginForm.vue"
import products from "./components/productos.vue"

const routes = [
    { path: "/register", component: register },
    { path: "/login", component: login},
    { path: "/products", component: products },
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;