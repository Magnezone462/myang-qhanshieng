import { ref } from 'vue'
import { defineStore } from 'pinia'

export const jyongKriemsakDziwxengkho = defineStore('kriemsakDziwxeng', () => {
  // 《漢辭海》部首: 《ハンズハイ》 ラジカル
  const qhzqhBushyu = ref(<string>'')

  // 四角號碼: フォー コーナー コード
  const sikrokXaumra = ref(<string>'')

  // 結果: リザルト
  const ketkua = ref([])

  return {
    qhzqhBushyu,
    sikrokXaumra,
    ketkua,
  }
})
