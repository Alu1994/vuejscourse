import Header from './components/Header.vue';
import Home from './components/Home.vue';

// Here it loads all the imported components on every page, even though we are not using them
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';

// lazy loading
// Now "User" will only be loaded if we need it, which means they will load asynchronously
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue').default);
    }, 'user'); // Grouping Bundles
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue').default);
    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue').default);
    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue').default);
    }, 'user');
};

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', 
    components: 
    {
        default: User,
        'header-bottom': Header
    }, 
        props: true, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, props: true,
          beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next();
          }
        },
        { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
    ] },
    
    //{ path: '/redirect-me', redirect: '/user' }
    { path: '/redirect-me', redirect: { name: 'home' } },
    
    // if the routes config don't find any valid route the "*" will check for every
    // invalid path and then we can redirect, in this case to the "home page"
    { path: '*', redirect: { name: 'home' } }
];