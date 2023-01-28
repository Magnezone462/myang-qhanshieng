import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/lyixeng'
import dziwqrim from '@/sryokio/dziwqrim.json'
import type { DziwqrimSryokio } from '@/cisren/lyixeng'

// 所入隋拼: インプテッド スイ チャイニーズ アルファベット
type SrioNipZyepheng = string | null

// 所選詩韵: セレクテッド チャイニーズ ポエム ライム
type SrioSyenShiwxryn = string | null

// 所選韵攝, 所選, 所選, 所選, 所選: セレクテッド チャイニーズ ポエム ライム
type SrioSyenXrynShiep = string | null
type SrioSyenKhwixwp = string | null
type SrioSyenTwixryi = string | null
type SrioSyenSishieng = string | null
type SrioSyenXrynmyuk = string | null
type SrioSyenShiengmu = string | null

export const jyongDziwqrimKriemsakkho = defineStore('dziwqrimKriemsak', () => {
  const pyangshiwk = ref(<Pyangshiwk>Pyangshiwk.zyepheng)
  const srioNipZyepheng = ref(<SrioNipZyepheng>null)
  const srioSyenShiwxryn = ref(<SrioSyenShiwxryn>null)
  const srioSyenXrynshiep = ref(<SrioSyenXrynShiep>null)
  const srioSyenKhwixwp = ref(<SrioSyenKhwixwp>null)
  const srioSyenTwixryi = ref(<SrioSyenTwixryi>null)
  const srioSyenSishieng = ref(<SrioSyenSishieng>null)
  const srioSyenXrynmyuk = ref(<SrioSyenXrynmyuk>null)
  const srioSyenShiengmu = ref(<SrioSyenShiengmu>null)
  const kriemsakKetkua = ref(<DziwqrimSryokio[]>[])

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
        case Pyangshiwk.twixrynxrok: {
          const myuinip =
            !srioSyenXrynshiep.value &&
            !srioSyenKhwixwp.value &&
            !srioSyenTwixryi.value &&
            !srioSyenSishieng.value &&
            !srioSyenXrynmyuk.value &&
            !srioSyenShiengmu.value
          const lioXrynshiep = srioSyenXrynshiep.value ? tuiziang.shiep === srioSyenXrynshiep.value : true
          const lioKhwixwp = srioSyenKhwixwp.value ? tuiziang.qho === srioSyenKhwixwp.value : true
          const lioTwixryi = srioSyenTwixryi.value ? tuiziang.twng === srioSyenTwixryi.value : true
          const lioSishieng = srioSyenSishieng.value ? tuiziang.deu === srioSyenSishieng.value : true
          const lioXrynmyuk = srioSyenXrynmyuk.value ? tuiziang.xryn === srioSyenXrynmyuk.value : true
          const lioShiengmu = srioSyenShiengmu.value ? tuiziang.shieng === srioSyenShiengmu.value : true
          return !myuinip && lioXrynshiep && lioKhwixwp && lioTwixryi && lioSishieng && lioXrynmyuk && lioShiengmu
        }
      }
    })
  }

  return {
    pyangshiwk,
    srioNipZyepheng,
    srioSyenShiwxryn,
    srioSyenXrynshiep,
    srioSyenKhwixwp,
    srioSyenTwixryi,
    srioSyenSishieng,
    srioSyenXrynmyuk,
    srioSyenShiengmu,
    twkKriemsakKetkua,
    triwPyangshiwk,
    triwSrioNipZyepheng,
    triwSrioSyenShiwxryn,
    triwSrioSyenShiengmu,
    triwKriemsakKetkua,
  }
})
