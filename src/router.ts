import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tsutomu from './views/Tsutomu.vue';
import Toki from './views/Toki.vue';
import Minokich from './views/Minokich.vue';
import Naoto from './views/Naoto.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tsutomu',
      name: 'tsutomu',
      component: Tsutomu
    },
    {
      path: '/toki',
      name: 'toki',
      component: Toki
    },
    {
      path: '/minokich',
      name: 'minokich',
      component: Minokich
    },
    {
      path: '/naoto',
      name: 'naoto',
      component: Naoto
    }
  ]
});
