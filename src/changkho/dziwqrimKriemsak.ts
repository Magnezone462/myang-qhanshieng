import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/lyixeng'
import dziwqrim from '../sryokio/dziwqrim.json'
import type { DziwqrimSryokio } from '@/cisren/lyixeng'

type SrioNipZyepheng = string | null
type SrioSyenShiwxryn = string | null
type SrioSyenShiengmu = string | null

export const jyongDziwqrimKriemsakkho = defineStore('dziwqrimKriemsak', () => {
  const pyangshiwk = ref(<Pyangshiwk>Pyangshiwk.zyepheng)
  const srioNipZyepheng = ref(<SrioNipZyepheng>null)
  const srioSyenShiwxryn = ref(<SrioSyenShiwxryn>null)
  const srioSyenShiengmu = ref(<SrioSyenShiengmu>null)
  const kriemsakKetkua = ref(<DziwqrimSryokio[]>[])

  const twkSrioNipZyepheng = computed(() => srioNipZyepheng.value)
  const twkSrioSyenShiwxryn = computed(() => srioSyenShiwxryn.value)
  const twkSrioSyenShiengmu = computed(() => srioSyenShiengmu.value)
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value)

  const triwPyangshiwk = (grien: Pyangshiwk) => {
    pyangshiwk.value = grien
  }

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
      switch (pyangshiwk.value) {
        case Pyangshiwk.zyepheng:
          return tuiziang.zyepheng === srioNipZyepheng.value
        case Pyangshiwk.briengshyixryn: {
          const lioShiwxryn = srioSyenShiwxryn.value ? tuiziang.shiwxryn === srioSyenShiwxryn.value : true
          const lioShiengmu = srioSyenShiengmu.value ? tuiziang.shieng === srioSyenShiengmu.value : true
          const myuinip = !srioSyenShiwxryn.value && !srioSyenShiengmu.value
          return !myuinip && lioShiwxryn && lioShiengmu
        }
        case Pyangshiwk.twixrynxrok:
          return false
      }
    })
  }

  return {
    pyangshiwk,
    srioNipZyepheng,
    srioSyenShiwxryn,
    srioSyenShiengmu,
    twkSrioNipZyepheng,
    twkSrioSyenShiwxryn,
    twkSrioSyenShiengmu,
    twkKriemsakKetkua,
    triwPyangshiwk,
    triwSrioNipZyepheng,
    triwSrioSyenShiwxryn,
    triwSrioSyenShiengmu,
    triwKriemsakKetkua,
  }
})
