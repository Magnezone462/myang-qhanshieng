import { ref } from 'vue'
import { defineStore } from 'pinia'
import { KriemsakPieuchiem } from '@/cisren/muikio'

// 抽屜: ドロワー
type Thryuthei = boolean | null

// 用系統庫: ユーズ システム ストア
export const jyongXeithongkho = defineStore('xeithong', () => {
  // 檢索標籤: サーチ タブ
  const kriemsakPieuchiem = ref(<KriemsakPieuchiem>KriemsakPieuchiem.dziwbyo)

  // 檢索邊欄抽屜: サーチ サイドバー ドロワー
  const kriemsakPenlanThryuthei = ref(<Thryuthei>null)

  // 設置邊欄抽屜: セッチング サイドバー ドロワー
  const shiettriwPenlanThryuthei = ref(<Thryuthei>false)

  // 换檢索邊欄抽屜: トグル サーチ サイドバー ドロワー
  const xuanKriemsakPenlanThryuthei = (): void => {
    kriemsakPenlanThryuthei.value = !kriemsakPenlanThryuthei.value
  }

  // 换設置邊欄抽屜: トグル セッチング サイドバー ドロワー
  const xuanShiettriwPenlanThryuthei = (): void => {
    shiettriwPenlanThryuthei.value = !shiettriwPenlanThryuthei.value
  }

  return {
    kriemsakPieuchiem,
    kriemsakPenlanThryuthei,
    shiettriwPenlanThryuthei,
    xuanKriemsakPenlanThryuthei,
    xuanShiettriwPenlanThryuthei,
  }
})
