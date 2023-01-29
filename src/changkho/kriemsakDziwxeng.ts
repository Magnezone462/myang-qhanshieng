import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakDziwxengPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import DZIWXENG_SIKROK_XAUMRA from '@/cileu/DZIWXENG_SIKROK_XAUMRA.json'
import DZIWXENG_QhZQh_BUSHYU from '@/cileu/DZIWXENG_QhZQh_BUSHYU.json'
import type { Dziwxeng } from '@/cisren/lyixeng'

export const jyongKriemsakDziwxengkho = defineStore('kriemsakDziwxeng', () => {
  /**
   * 方式: モード
   */
  const pyangshiwk = ref(<Pyangshiwk>Pyangshiwk.sikrokXaumra)

  // 四角號碼: フォー コーナー コード
  const sikrokXaumra = ref(<string>'')

  // 《漢辭海》部首: 《ハンズハイ》 ラジカル
  const qhzqhBushyu = ref(<string>'')

  // 《漢辭海》剩餘: 《ハンズハイ》 アデショナル
  const qhzqhZhiwngjio = ref(<string>'')

  // 結果: リザルト
  const ketkua = ref(<Dziwxeng[]>[])

  /**
   * 得結果: ゲット リザルト
   */
  const twkKetkua = computed(() => ketkua.value)

  /**
   * 置方式: セット モード
   */
  const triwPyangshiwk = (grien: Pyangshiwk) => (pyangshiwk.value = grien)

  /**
   * 置結果: セット リザルト
   */
  const triwKetkua = (): void => {
    switch (pyangshiwk.value) {
      case Pyangshiwk.sikrokXaumra:
        ketkua.value = DZIWXENG_SIKROK_XAUMRA.filter((kiwlyok) => {
          for (const xaumra of kiwlyok.sikrokXaumra) {
            return xaumra === sikrokXaumra.value
          }
        })
        break

      case Pyangshiwk.QhZQhBushyu:
        ketkua.value = DZIWXENG_QhZQh_BUSHYU.filter((kiwlyok) => {
          return kiwlyok.bushyu === qhzqhBushyu.value
        })
        break
    }
  }

  return {
    pyangshiwk,
    qhzqhBushyu,
    qhzqhZhiwngjio,
    sikrokXaumra,
    ketkua,
    twkKetkua,
    triwPyangshiwk,
    triwKetkua,
  }
})
