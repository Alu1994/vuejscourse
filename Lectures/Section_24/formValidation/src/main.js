import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import Vuelidate from 'vuelidate';

import router from './router'
import store from './store'

Vue.use(Vuelidate);

// -- Base Url to the hole application
axios.defaults.baseURL = "https://vuejs-axios-b76b8.firebaseio.com";

//- This will be applied to any type of request "GET, POST, PUT, DELETE..."
// axios.defaults.headers.common['Authorization'] = 'fasfdsa'

//- This will apply headers only to "GET" requests
axios.defaults.headers.get['Accepts'] = 'application/json'


// -- The interceptors are just like middlewares, 
// -- we have continue its flow, otherwise the application will not continue
//- Manipulate the requests and responses
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  config.headers['SOMETHING'] = 'HEHE'
  return config
})

const resInterceptor = axios.interceptors.response.use(res => { 
  console.log('Response Interceptor', res)
  res.headers['SOMETHING_ELSE'] = 'HEHE'
  return res
})

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(resInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
