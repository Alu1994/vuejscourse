import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
  //works fine
  //routes: routes
});

// Gets executes on each route action
router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();

  // To stay on the same page
  //next(false);

  // Pass a path
  //next({ path: '' });
});

new Vue({
  el: '#app',
  router,
  
  // works fine
  // routes: routes
  
  render: h => h(App)
})