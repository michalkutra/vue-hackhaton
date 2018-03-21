import Vue from 'vue'
import App from './App.vue'
import Request from './plugins/request';

Vue.config.productionTip = false;

/* eslint-disable */
const {
  apiDomain,
} = dpApp;

localStorage.setItem('auth', JSON.stringify({'access_token': 'ZGI1NDQxZDIzNGU1YzY1YzM2ZjdjZTIyZTI1MTJhZDk2NTA2YzNlMDJjMGQyZjJhN2NlMzI1MzIzOTU4Y2Y2YQ'}));
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
