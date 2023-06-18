import { ref } from 'vue'
import { defineStore } from 'pinia'

/** 抽屜 */
type Thryuthei = boolean | null

/** 用系統庫 */
export const jyongXeithongkho = defineStore('xeithong', () => {
  /** 設置抽屜 */
  const shiettriwThryuthei = ref(false as Thryuthei)

  /** 换設置抽屜 */
  const xuanShiettriwThryuthei = (): void => {
    shiettriwThryuthei.value = !shiettriwThryuthei.value
  }

  return {
    shiettriwThryuthei,
    xuanShiettriwThryuthei,
  }
})
