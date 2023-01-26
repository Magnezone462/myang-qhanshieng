import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Nguaikuan } from '@/cisren/lyixeng'

// 用系統本地庫: ユーズ システム ローカル ストア
export const jyongXeithongPundhikho = defineStore(
  'xeithongPundhi',
  () => {
    // 外觀: アピアランス
    const nguaikuan = ref(<Nguaikuan>Nguaikuan.dzidung)

    // 置外觀: セット アピアランス
    const triwNguaikuan = (kradriw: Nguaikuan): void => {
      nguaikuan.value = kradriw
    }

    return {
      nguaikuan,
      triwNguaikuan,
    }
  },
  { persist: true }
)
