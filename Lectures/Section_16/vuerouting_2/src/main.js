import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
  //works fine
  //routes: routes
});

new Vue({
  el: '#app',
  router,
  
  // works fine
  // routes: routes
  
  render: h => h(App)
})