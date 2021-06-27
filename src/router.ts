import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/Index.vue'
import detail from './pages/Detail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/detail',
      component: detail,
    },
  ],
})
