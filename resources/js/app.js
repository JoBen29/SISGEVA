import './bootstrap';
import { createApp } from 'vue';
import RegistroForm from './components/registroForm.vue'
import Productos from './components/productos.vue';

const registroform = createApp({});
registroform.component('registro-form', RegistroForm);
registroform.mount('#registroForm');

const productos = createApp({});
productos.component('productos', Productos)
productos.mount('#productos')