import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { DziwbyoCileu } from '@/cisren/lyixeng'

/**
 * 用檢索字符庫: ユーズ サーチ キャラクター ストア
 */
export const jyongKriemsakDziwbyokho = defineStore('kriemsakDziwbyo', () => {
  /**
   * 漢字串: シノグラム ストリング
   */
  const qhandziwthyen = ref(<string>'')

  /**
   * 結果: リザルト
   */
  const ketkua = ref(<DziwbyoCileu[]>[])

  /**
   * 得結果: ゲット リザルト
   */
  const twkKetkua = computed(() => ketkua.value)

  /**
   * 置結果: セット リザルト
   */
  const triwKetkua = async (): Promise<void> => {
    ketkua.value = []
    // dziwbyo（字符: キャラクター)
    for (const dziwbyo of qhandziwthyen.value) {
      const DZIWBYO = (await import('@/cileu/DZIWBYO.json')).default
      // tandziwKetkua (單字結果: シングル キャラクター リザルト)
      // kiwlyok (記録: レコード)
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
