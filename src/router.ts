import { createRouter, createWebHistory } from 'vue-router'
import index from './pages/Index.vue'
import detail from './pages/Detail.vue'
import create from './pages/Create.vue'
import howto from './pages/Howto.vue'
import error from './pages/Error.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/howto',
      component: howto,
    },
    {
      path: '/detail/:id',
      component: detail,
    },
    {
      name: 'Create',
      path: '/create',
      component: create,
    },
    { name: 'NotFound', path: '/:pathMatch(.*)*', component: error },
  ],
})
