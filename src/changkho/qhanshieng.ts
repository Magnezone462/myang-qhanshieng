import { ref } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakPieuchiem } from '@/cisren/muikio'

/** 抽屜 */
type Thryuthei = boolean | null

/** 用漢聲庫 */
export const jyongQhanshiengkho = defineStore('qhanshieng', () => {
  /** 抽屜 */
  const thryuthei = ref(null as Thryuthei)

  /** 抽屜標籤 */
  const thryutheiPieuchiem = ref(KriemsakPieuchiem.dziwbyo as KriemsakPieuchiem)

  /** 换抽屜 */
  const xuanThryuthei = (): void => {
    thryuthei.value = !thryuthei.value
  }

  return {
    thryutheiPieuchiem,
    thryuthei,
    xuanThryuthei,
  }
})
