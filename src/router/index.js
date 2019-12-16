import Vue from 'vue';
import VueRouter from 'vue-router';
import Reports from '../components/Reports.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'reports',
    component: Reports,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
