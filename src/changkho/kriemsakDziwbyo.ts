import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import DZIWBYO from '../sryokio/DZIWBYO.json'
import type { DziwbyoCileu } from '@/cisren/lyixeng'

export const jyongKriemsakDziwbyokho = defineStore('kriemsakDziwbyo', () => {
  // 字符串: キャラクター ストリング
  const qhandziwthyen = ref('')

  // 結果: リザルト
  const ketkua = ref(<DziwbyoCileu[]>[])

  // 得結果: ゲット リザルト
  const twkKetkua = computed(() => ketkua.value)

  // 置結果: セット リザルト
  const triwKetkua = () => {
    ketkua.value = []
    console.log('hoge2')
    // dziwbyo（字符: キャラクター)
    for (const dziwbyo of qhandziwthyen.value) {
      // tandziwKetkua (單字結果: シングル キャラクター リザルト)
      // kiwlyok (記録: レコード)
      console.log('hoge')
      const tandziwKetkua = DZIWBYO.find((kiwlyok) => {
        return kiwlyok.dziwbyo === dziwbyo
      })
      if (tandziwKetkua) ketkua.value.push(tandziwKetkua)
    }
  }

  return {
    qhandziwthyen,
    ketkua,
    twkKetkua,
    triwKetkua,
  }
})
