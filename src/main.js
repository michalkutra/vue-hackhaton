import Vue from 'vue'
import App from './App.vue'
import Request from './plugins/request';

Vue.config.productionTip = false;

/* eslint-disable */
const {
  apiDomain,
} = dpApp;

localStorage.setItem('auth', JSON.stringify({'access_token': 'YWQ3NDQ4YTI2OTkxZGMxYjBjM2M5NjgxZTYyNDI0MmJlNTVjNTk0MWY2NzQzNDU5ZDUxNmY4ZDAxYzdhNjFjNg'}));
/* eslint-enable */

Vue.use(Request, {
  useInterceptors: true,
  interceptorOptions: {
    baseUrl: `${apiDomain}/api/`,
    storage: {
      name: 'auth',
      key: 'access_token',
    },
  },
});

new Vue({
  render: h => h(App)
}).$mount('#app');
