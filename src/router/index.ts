import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'users',
        component: () => import('@/views/users/index.vue'),
      },
      {
        path: 'roles',
        component: () => import('@/views/roles/index.vue'),
      },
      {
        path: 'menus',
        component: () => import('@/views/menus/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const setupRouter = (app: App<Element>) => {
  app.use(router);
};

export { setupRouter };
