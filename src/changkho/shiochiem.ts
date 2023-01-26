import { ref } from 'vue'
import { defineStore } from 'pinia'

// 用書籤庫: ユーズ ブックマーク ストア
export const jyongShiochiemkho = defineStore(
  'shiochiem',
  () => {
    // 字符組: キャラクター アレー
    const dziwbyoco = ref(<string[]>[])

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
      if (grien) dziwbyoco.value.push(grien)
    }

    // 换字符: トグル キャラクター
    const xuanDziwbyo = (grien: string): void => {
      dieXwmDziwbyo(grien) ? drioDziwbyo(grien) : kraDziwbyo(grien)
    }

    return {
      dziwbyoco,
      byukDziwbyoco,
      dieXwmDziwbyo,
      drioDziwbyo,
      kraDziwbyo,
      xuanDziwbyo,
    }
  },
  { persist: true }
)
