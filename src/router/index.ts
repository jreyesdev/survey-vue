import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Layout from '../components/layouts/Layout.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Surveys from '../views/Surveys.vue';
import { store } from '../store';

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    redirect: '/dashboard',
    meta: { requiresAuth: true },
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

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' });
  } else if (
    store.state.user.token &&
    (to.name === 'Login' || to.name === 'Register')
  ) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
