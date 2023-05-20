import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import DZIWQRIM_KRAP from '@/cileu/DZIWQRIM_KRAP.json'
import type { DziwqrimKrapCileu } from '@/cisren/lyixeng'

/**
 * 下拉框: ドロップダウン フィールド
 */
type Xralakhyang = string | null

/**
 * 用檢索字音庫: ユーズ サーチ プロナンシエーション ストア
 */
export const jyongKriemsakDziwqrimkho = defineStore('kriemsakDziwqrim', () => {
  /**
   * 方式: モード
   */
  const pyangshiwk = ref(<Pyangshiwk>Pyangshiwk.zyepheng)

  /**
   * 隋拼: スイ チャイニーズ アルファベット
   */
  const zyepheng = ref(<string>'')

  /**
   * 詩韵: チャイニーズ ポエム ライム
   */
  const shiwxryn = ref(<Xralakhyang>null)

  // 韵攝, 開合, 等位, 四聲, 韵目, 聲母: チャイニーズ ライム スタヂーズ インフォメーションズ
  const xrynshiep = ref(<Xralakhyang>null)
  const khwixwp = ref(<Xralakhyang>null)
  const twixryi = ref(<Xralakhyang>null)
  const sishieng = ref(<Xralakhyang>null)
  const xrynmyuk = ref(<Xralakhyang>null)
  const shiengmu = ref(<Xralakhyang>null)

  /**
   * 結果: リザルト
   */
  const ketkua = ref(<DziwqrimKrapCileu[]>[])

  /**
   * 得結果: ゲット リザルト
   */
  const twkKetkua = computed(() => ketkua.value)

  /**
   * 置方式: セット モード
   */
  const triwPyangshiwk = (grien: Pyangshiwk) => (pyangshiwk.value = grien)

  /**
   * 置隋拼: セット スイ チャイニーズ アルファベット
   */
  const triwZyepheng = (grien: string) => (zyepheng.value = grien)

  /**
   * 置詩韵: セット チャイニーズ ポエム ライム
   */
  const triwShiwxryn = (grien: Xralakhyang) => (shiwxryn.value = grien)

  /**
   * 置結果: セット リザルト
   */
  const triwKetkua = () => {
    // 記録: レコード
    ketkua.value = DZIWQRIM_KRAP.filter((kiwlyok) => {
      switch (pyangshiwk.value) {
        case Pyangshiwk.zyepheng:
          return kiwlyok.zyepheng === zyepheng.value
        case Pyangshiwk.briengshyixryn: {
          const myuinip = !shiwxryn.value && !shiengmu.value
          const lioShiwxryn = shiwxryn.value ? kiwlyok.shiwxryn === shiwxryn.value : true
          const lioShiengmu = shiengmu.value ? kiwlyok.shiengmu === shiengmu.value : true
          return !myuinip && lioShiwxryn && lioShiengmu
        }
        case Pyangshiwk.twixrynxrok: {
          const myuinip =
            !xrynshiep.value &&
            !khwixwp.value &&
            !twixryi.value &&
            !sishieng.value &&
            !xrynmyuk.value &&
            !shiengmu.value
          const lioXrynshiep = xrynshiep.value ? kiwlyok.xrynshiep === xrynshiep.value : true
          const lioKhwixwp = khwixwp.value ? kiwlyok.khwixwp === khwixwp.value : true
          const lioTwixryi = twixryi.value ? kiwlyok.twixryi === twixryi.value : true
          const lioSishieng = sishieng.value ? kiwlyok.sishieng === sishieng.value : true
          const lioXrynmyuk = xrynmyuk.value ? kiwlyok.xrynmyuk === xrynmyuk.value : true
          const lioShiengmu = shiengmu.value ? kiwlyok.shiengmu === shiengmu.value : true
          return (
            !myuinip &&
            lioXrynshiep &&
            lioKhwixwp &&
            lioTwixryi &&
            lioSishieng &&
            lioXrynmyuk &&
            lioShiengmu
          )
        }
      }
    })
  }

  return {
    pyangshiwk,
    zyepheng,
    shiwxryn,
    xrynshiep,
    khwixwp,
    twixryi,
    sishieng,
    xrynmyuk,
    shiengmu,
    twkKetkua,
    triwPyangshiwk,
    triwZyepheng,
    triwShiwxryn,
    triwKetkua,
  }
})
