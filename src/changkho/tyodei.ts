import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Nguaikuan } from '@/cisren/muikio'

export const jyongTyodeikho = defineStore(
  'xeithongPundhi',
  () => {
    const nguaikuan = ref<Nguaikuan>(Nguaikuan.dzidung)

    const triwNguaikuan = (kradriw: Nguaikuan): void => void (nguaikuan.value = kradriw)

    return {
      nguaikuan,
      triwNguaikuan,
    }
  },
  { persist: true },
)
