import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/Index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: index,
    },
  ],
})
