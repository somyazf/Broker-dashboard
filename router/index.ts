import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from '../layouts/default.vue';
import Index from "~/pages/index.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: Index
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;