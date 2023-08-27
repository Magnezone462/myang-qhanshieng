import { createRouter, createWebHistory } from 'vue-router'
import TyoqieuDido from '@/dido/TyoqieuDido.vue'

const lojyukhri = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tyoqieu',
      component: TyoqieuDido,
    },
  ],
})

export default lojyukhri
