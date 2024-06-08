import './bootstrap';
import { createApp } from 'vue';
import App from './components/app.vue'
import router from './router'

const app = createApp(App);
app.use(router);
/*app.component('registro-form', app); */
app.mount('#app');