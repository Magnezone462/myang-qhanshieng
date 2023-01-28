// 檢索字音方式: サーチ プロナンシエーション モード
export const KriemsakDziwqrimPyangshiwk = {
  zyepheng: 0,
  briengshyixryn: 1,
  twixrynxrok: 2,
} as const
export type KriemsakDziwqrimPyangshiwk = (typeof KriemsakDziwqrimPyangshiwk)[keyof typeof KriemsakDziwqrimPyangshiwk]

// 外觀: アピアランス
export const Nguaikuan = {
  chiensriwk: 'light',
  shimsriwk: 'dark',
  dzidung: 'automatic',
} as const
export type Nguaikuan = (typeof Nguaikuan)[keyof typeof Nguaikuan]
