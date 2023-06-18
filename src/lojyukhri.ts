import { createRouter, createWebHistory } from 'vue-router'
import QhanshiengDido from '@/dido/QhanshiengDido.vue'

const lojyukhri = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'qhanshieng',
      component: QhanshiengDido,
    },
    {
      path: '/qhanla',
      name: 'qhanla',
      component: () => import('@/dido/QhanlaDido.vue'),
    },
  ],
})

export default lojyukhri
