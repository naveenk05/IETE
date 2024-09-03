import { createApp } from 'vue'

createApp(App).mount('#app')

import Vue from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import ContactUs from './views/ContactUs.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

Vue.config.productionTip = false;


const routes = [
  { path: '/',component:ContactUs },
  { path: '/contact', component: ContactUs },
  // Other routes...
];

const router = new createRouter({
    history:createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');