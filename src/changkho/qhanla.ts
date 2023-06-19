import { ref } from 'vue'
import { defineStore } from 'pinia'

/** 抽屜 */
type Thryuthei = boolean | null

/** 結果 */
interface Ketkua {
  dziwbyo: string
  zyepheng: string[]
}

/** 用漢羅庫 */
export const jyongQhanlakho = defineStore('qhanla', () => {
  /** 抽屜 */
  const thryuthei = ref(null as Thryuthei)

  /** 文本框 */
  const myunpunkhyang = ref('')

  /** 結果 */
  const ketkua = ref([] as Ketkua[])

  /** 换抽屜 */
  const xuanThryuthei = (): void => {
    thryuthei.value = !thryuthei.value
  }

  /** 置結果 */
  const triwKetkua = async (): Promise<void> => {
    ketkua.value = []
    for (const dziwbyo of myunpunkhyang.value) {
      const QHANLA = (await import('@/cileu/QHANLA.json')).default
      const qhanla = QHANLA.filter((kiwlyok) => kiwlyok.dziwbyo === dziwbyo)
      if (qhanla.length !== 0) {
        const tanketkua: Ketkua = { dziwbyo, zyepheng: [] }
        for (const tanqhanla of qhanla) {
          tanketkua.zyepheng.push(tanqhanla.zyepheng)
        }
        ketkua.value.push(tanketkua)
      } else {
        ketkua.value.push({ dziwbyo, zyepheng: [] })
      }
    }
  }

  return {
    thryuthei,
    myunpunkhyang,
    ketkua,
    xuanThryuthei,
    triwKetkua,
  }
})
