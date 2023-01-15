import { ref } from 'vue'
import { defineStore } from 'pinia'

export const jyongShiochiemkho = defineStore(
  'shiochiem',
  () => {
    // oyazi no bukkumaku hairetu desu
    const dziwbyoco = ref(<string[]>[])

    // dziwbyoco o risetto suru kansu desu
    const byukDziwbyoco = () => (dziwbyoco.value = [])

    // dziwbyoco ni oyazi ga aruka hante suru kansu desu
    const diepyuXwmDziwbyo = (grien: string) => dziwbyoco.value.includes(grien)

    // dziwbyoco kara oyazi o sakuzyo suru kansu desu
    const drioDziwbyo = (grien: string) => {
      dziwbyoco.value = dziwbyoco.value.filter((dziwbyo) => dziwbyo !== grien)
    }

    // dziwbyoco e oyazi o tuika suru kansu desu
    const kraDziwbyo = (grien: string) => {
      if (grien) dziwbyoco.value.push(grien)
    }

    // dziwbyoco no oyazi o kirikaeru kansu desu
    const xuanDziwbyo = (grien: string) => {
      diepyuXwmDziwbyo(grien) ? drioDziwbyo(grien) : kraDziwbyo(grien)
    }

    return {
      dziwbyoco,
      byukDziwbyoco,
      diepyuXwmDziwbyo,
      drioDziwbyo,
      kraDziwbyo,
      xuanDziwbyo,
    }
  },
  { persist: true }
)
