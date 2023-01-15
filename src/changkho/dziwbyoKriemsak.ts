import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dziwxeng from '../sryokio/dziwxeng.json'
import type { DziwxengSryokio } from '@/cisren/lyixeng'

export const jyongDziwbyoKriemsakkho = defineStore('dziwbyoKriemsak', () => {
  const srioNipQhandziwthyen = ref('')
  const kriemsakKetkua = ref(<DziwxengSryokio[]>[])

  const twkSrioNipQhandziwthyen = computed(() => srioNipQhandziwthyen.value)
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value)

  const triwSrioNipQhandziwthyen = (grien: string) => {
    srioNipQhandziwthyen.value = grien
  }

  const triwKriemsakKetkua = () => {
    kriemsakKetkua.value = []
    for (const dziwbyo of srioNipQhandziwthyen.value) {
      const dziwbyoKriemsakKetkua = dziwxeng.filter((tuiziang) => {
        return tuiziang.dziw === dziwbyo
      })
      for (const tuiziang of dziwbyoKriemsakKetkua) {
        kriemsakKetkua.value.push(tuiziang)
      }
    }
  }

  return {
    srioNipQhandziwthyen,
    kriemsakKetkua,
    twkSrioNipQhandziwthyen,
    twkKriemsakKetkua,
    triwSrioNipQhandziwthyen,
    triwKriemsakKetkua,
  }
})
