import { createRouter, createWebHistory } from "vue-router";

import RegistroForm from "./components/RegistroForm.vue"
import Login from "./components/Login.vue"
import ProductItem from "./components/ProductItem.vue"
import ProductList from "./components/ProductList.vue"

const routes = [
    { path: "/RegistroForm", component: RegistroForm },
    { path: "/Login", component: Login},
    { path: "/ProductItem", component: ProductItem },
    { path: "/ProductList", component: ProductList},
    
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;