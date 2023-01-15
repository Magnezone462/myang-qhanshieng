import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import dziwqrim from '../sryokio/dziwqrim.json'
import type { DziwqrimSryokio } from '@/cisren/lyixeng'

type SrioNipZyepheng = string | null
type SrioSyenShiwxryn = string | null
type SrioSyenShiengmu = string | null

export const jyongDziwqrimKriemsakkho = defineStore('dziwqrimKriemsak', () => {
  const srioNipZyepheng = ref(<SrioNipZyepheng>null)
  const srioSyenShiwxryn = ref(<SrioSyenShiwxryn>null)
  const srioSyenShiengmu = ref(<SrioSyenShiengmu>null)
  const kriemsakKetkua = ref(<DziwqrimSryokio[]>[])

  const twkSrioNipZyepheng = computed(() => srioNipZyepheng.value)
  const twkSrioSyenShiwxryn = computed(() => srioSyenShiwxryn.value)
  const twkSrioSyenShiengmu = computed(() => srioSyenShiengmu.value)
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value)

  const triwSrioNipZyepheng = (grien: SrioNipZyepheng) => {
    srioNipZyepheng.value = grien
  }
  const triwSrioSyenShiwxryn = (grien: SrioSyenShiwxryn) => {
    srioSyenShiwxryn.value = grien
  }
  const triwSrioSyenShiengmu = (grien: SrioSyenShiengmu) => {
    srioSyenShiwxryn.value = grien
  }
  const triwKriemsakKetkua = () => {
    kriemsakKetkua.value = dziwqrim.filter((tuiziang) => {
      const lioZyepheng = srioNipZyepheng.value ? tuiziang.zyepheng === srioNipZyepheng.value : true
      const lioShiwxryn = srioSyenShiwxryn.value ? tuiziang.shiwxryn === srioSyenShiwxryn.value : true
      const lioShiengmu = srioSyenShiengmu.value ? tuiziang.shieng === srioSyenShiengmu.value : true
      const myuinip = !srioNipZyepheng.value && !srioSyenShiwxryn.value && !srioSyenShiengmu.value

      return !myuinip && lioZyepheng && lioShiwxryn && lioShiengmu
    })
  }

  return {
    srioNipZyepheng,
    srioSyenShiwxryn,
    srioSyenShiengmu,
    twkSrioNipZyepheng,
    twkSrioSyenShiwxryn,
    twkSrioSyenShiengmu,
    twkKriemsakKetkua,
    triwSrioNipZyepheng,
    triwSrioSyenShiwxryn,
    triwSrioSyenShiengmu,
    triwKriemsakKetkua,
  }
})
