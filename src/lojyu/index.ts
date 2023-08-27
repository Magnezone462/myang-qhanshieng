import { createRouter, createWebHistory } from 'vue-router'

const lojyukhri = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tyoqieu',
      component: () => import('@/dido/TyoqieuDido.vue'),
    },
  ],
})

export default lojyukhri
