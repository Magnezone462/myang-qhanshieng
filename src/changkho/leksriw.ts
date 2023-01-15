import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const jyongLeksriwkho = defineStore(
  'leksriw',
  () => {
    // oyazi no rireki hairetu desu
    const dziwbyoco = ref(<string[]>[])

    // dziwbyoco o gyakuzyun de kaesi masu
    const dziwbyocoTentau = computed(() => dziwbyoco.value.reverse())

    /**
     * dziwbyoco o risetto suru kansu desu.
     * @returns nanimo kaesimasen
     */
    const byukDziwbyoco = () => (dziwbyoco.value = [])

    /**
     * dziwbyoco ni oyazi ga aruka hante suru kansu desu.
     * @param grien Sonzai o kakunin sitai oyazi desu.
     * @returns Areba sin, nakereba gi o kaesimasu.
     */
    const diepyuXwmDziwbyo = (grien: string) => dziwbyoco.value.includes(grien)

    /**
     * dziwbyoco kara oyazi o sakuzyo suru kansu desu.
     * @param grien Aakuzyo suru oyazi desu.
     */
    const drioDziwbyo = (grien: string) => {
      dziwbyoco.value = dziwbyoco.value.filter((dziwbyo) => dziwbyo !== grien)
    }

    /**
     * dziwbyoco e oyazi o tuika suru kansu desu.
     * @param grien Tuika suru oyazi desu.
     */
    const kraDziwbyo = (grien: string) => {
      if (grien && !diepyuXwmDziwbyo(grien)) {
        dziwbyoco.value.push(grien)
      }
    }

    return {
      dziwbyoco,
      dziwbyocoTentau,
      byukDziwbyoco,
      diepyuXwmDziwbyo,
      drioDziwbyo,
      kraDziwbyo,
    }
  },
  { persist: true }
)
