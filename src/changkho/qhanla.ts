import { ref } from 'vue'
import { defineStore } from 'pinia'

/** 抽屜 */
type Thryuthei = boolean | null

/** 用漢羅庫 */
export const jyongQhanlakho = defineStore('qhanla', () => {
  /** 抽屜 */
  const thryuthei = ref(null as Thryuthei)

  /** 换抽屜 */
  const xuanThryuthei = (): void => {
    thryuthei.value = !thryuthei.value
  }

  return {
    thryuthei,
    xuanThryuthei,
  }
})
