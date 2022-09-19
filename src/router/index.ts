import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { store } from '../store';
import Auth from '../components/layouts/Auth.vue';
import Dashboard from '../views/Dashboard.vue';
import Layout from '../components/layouts/Layout.vue';
import Login from '../views/Login.vue';
import NotFoundVue from '../views/NotFound.vue';
import Register from '../views/Register.vue';
import Surveys from '../views/Surveys.vue';
import SurveyView from '../views/SurveyView.vue';

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
      { name: 'SurveyCreate', path: '/surveys/create', component: SurveyView },
      { name: 'SurveyView', path: '/surveys/:id', component: SurveyView },
    ],
  },
  {
    name: 'Auth',
    path: '/auth',
    redirect: '/login',
    component: Auth,
    meta: { isGuest: true },
    children: [
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
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: Layout,
    children: [{ path: '/:pathMatch(.*)*', component: NotFoundVue }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' });
  } else if (store.state.user.token && to.meta.isGuest) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
