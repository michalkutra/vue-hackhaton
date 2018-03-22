// ./src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';

Vue.use(Router);

const home = {
    path: '/',
    name: 'Home',
    component: Home
}

export default new Router({
    mode: 'history',
    routes: [
        home
    ]
});