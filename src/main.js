import Vue from 'vue'
import App from './App.vue'
import api from './api/api'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios';
import VueAxios from 'vue-axios';
global.api = api;
Vue.config.productionTip = false
const axiosInstance = axios.create({
  // baseURL: `http://localhost:3000/`,
  baseURL: `http://18.206.159.27:3000/`,
  timeout: 20000
});

Vue.use(VueAxios, axiosInstance);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
