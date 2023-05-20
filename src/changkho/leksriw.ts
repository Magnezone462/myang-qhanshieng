import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

// 用歷史庫: ユーズ ヒストリー ストア
export const jyongLeksriwkho = defineStore(
  'leksriw',
  () => {
    // 字符組: キャラクター アレー
    const dziwbyoco = ref(<string[]>[])

    // 字符組顛倒: キャラクター アレー リバース
    const dziwbyocoTentau = computed((): string[] => dziwbyoco.value.reverse())

    // 復字符組: イニシャライズ キャラクター アレー
    const byukDziwbyoco = (): void => {
      dziwbyoco.value = []
    }

    // 是含字符: イズ インクルード キャラクター
    const dieXwmDziwbyo = (grien: string): boolean => dziwbyoco.value.includes(grien)

    // 除字符: デリート キャラクター
    const drioDziwbyo = (grien: string): void => {
      dziwbyoco.value = dziwbyoco.value.filter((dziwbyo) => dziwbyo !== grien)
    }

    // 加字符: アド キャラクター
    const kraDziwbyo = (grien: string): void => {
      if (grien && !dieXwmDziwbyo(grien)) {
        dziwbyoco.value.push(grien)
      }
    }

    return {
      dziwbyoco,
      dziwbyocoTentau,
      byukDziwbyoco,
      dieXwmDziwbyo,
      drioDziwbyo,
      kraDziwbyo,
    }
  },
  { persist: true },
)
