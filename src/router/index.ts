import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Layout from '../components/layouts/Layout.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Surveys from '../views/Surveys.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      { name: 'Dashboard', path: '/dashboard', component: Dashboard },
      { name: 'Surveys', path: '/surveys', component: Surveys },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
