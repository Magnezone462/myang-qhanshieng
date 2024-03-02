import { ref } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakPieuchiem } from '@/cisren/muikio'

type Thryuthei = boolean | null

export const jyongXeithongkho = defineStore('xeithong', () => {
  const kriemsakPieuchiem = ref<KriemsakPieuchiem>(KriemsakPieuchiem.dziwbyo)
  const kriemsakPenlanThryuthei = ref<Thryuthei>(null)
  const shiettriwPenlanThryuthei = ref<Thryuthei>(false)
  const xuanKriemsakPenlanThryuthei = (): void =>
    void (kriemsakPenlanThryuthei.value = !kriemsakPenlanThryuthei.value)

  const xuanShiettriwPenlanThryuthei = (): void =>
    void (shiettriwPenlanThryuthei.value = !shiettriwPenlanThryuthei.value)

  return {
    kriemsakPieuchiem,
    kriemsakPenlanThryuthei,
    shiettriwPenlanThryuthei,
    xuanKriemsakPenlanThryuthei,
    xuanShiettriwPenlanThryuthei,
  }
})
