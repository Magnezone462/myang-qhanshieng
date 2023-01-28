import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import dziwqrim from '@/sryokio/dziwqrim.json'
import type { DziwqrimSryokio } from '@/cisren/lyixeng'

// 所選詩韵: セレクテッド チャイニーズ ポエム ライム
type SrioSyenShiwxryn = string | null

// 所選韵攝, 所選開合, 所選等位, 所選四聲, 所選韵目, 所選聲母: セレクテッド チャイニーズ ライム スタヂーズ インフォメーションズ
type SrioSyenXrynShiep = string | null
type SrioSyenKhwixwp = string | null
type SrioSyenTwixryi = string | null
type SrioSyenSishieng = string | null
type SrioSyenXrynmyuk = string | null
type SrioSyenShiengmu = string | null

export const jyongKriemsakDziwqrimkho = defineStore('kriemsakDziwqrim', () => {
  // 方式: モード
  const pyangshiwk = ref(<Pyangshiwk>Pyangshiwk.zyepheng)

  // 所入隋拼: インプテッド スイ チャイニーズ アルファベット
  const srioNipZyepheng = ref(<string>'')

  // 所選詩韵: セレクテッド チャイニーズ ポエム ライム
  const srioSyenShiwxryn = ref(<SrioSyenShiwxryn>null)

  // 所選韵攝, 所選開合, 所選等位, 所選四聲, 所選韵目, 所選聲母: セレクテッド チャイニーズ ライム スタヂーズ インフォメーションズ
  const srioSyenXrynshiep = ref(<SrioSyenXrynShiep>null)
  const srioSyenKhwixwp = ref(<SrioSyenKhwixwp>null)
  const srioSyenTwixryi = ref(<SrioSyenTwixryi>null)
  const srioSyenSishieng = ref(<SrioSyenSishieng>null)
  const srioSyenXrynmyuk = ref(<SrioSyenXrynmyuk>null)
  const srioSyenShiengmu = ref(<SrioSyenShiengmu>null)

  // 檢索結果: サーチ リザルト
  const kriemsakKetkua = ref(<DziwqrimSryokio[]>[])

  // 得檢索結果: ゲット サーチ リザルト
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value)

  // 置檢索結果: セット サーチ リザルト
  const triwPyangshiwk = (grien: Pyangshiwk) => {
    pyangshiwk.value = grien
  }

  // 置檢索結果: セット サーチ リザルト
  const triwSrioNipZyepheng = (grien: SrioNipZyepheng) => {
    srioNipZyepheng.value = grien
  }

  // 置檢索結果: セット サーチ リザルト
  const triwSrioSyenShiwxryn = (grien: SrioSyenShiwxryn) => {
    srioSyenShiwxryn.value = grien
  }

  // 置檢索結果: セット サーチ リザルト
  const triwSrioSyenShiengmu = (grien: SrioSyenShiengmu) => {
    srioSyenShiwxryn.value = grien
  }

  // 置檢索結果: セット サーチ リザルト
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
