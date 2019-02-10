import Home from './components/Home.vue';
import User from './components/user/User.vue';

export const routes = [
    { path: '', component: Home },
    { 
        path: '/user/:id', // /user/"something"
        component: User, 
        props: true // enabling passing the params to the props object
        // https://github.com/vuejs/vue-router/blob/dev/examples/route-props/app.js
    }
];