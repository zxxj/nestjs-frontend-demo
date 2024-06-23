import { App } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/register",
    component: () => import("@/views/register/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export { setupRouter }