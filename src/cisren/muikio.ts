// 檢索字音方式: サーチ プロナンシエーション モード
export const KriemsakDziwqrimPyangshiwk = {
  zyepheng: 0,
  briengshyixryn: 1,
  twixrynxrok: 2,
} as const
export type KriemsakDziwqrimPyangshiwk = (typeof KriemsakDziwqrimPyangshiwk)[keyof typeof KriemsakDziwqrimPyangshiwk]

// 檢索標籤: サーチ タブ
export const KriemsakPieuchiem = {
  shyonip: 0,
  shiochiem: 1,
  leksriw: 2,
} as const
export type KriemsakPieuchiem = (typeof KriemsakPieuchiem)[keyof typeof KriemsakPieuchiem]

// 外觀: アピアランス
export const Nguaikuan = {
  chiensriwk: 'light',
  shimsriwk: 'dark',
  dzidung: 'automatic',
} as const
export type Nguaikuan = (typeof Nguaikuan)[keyof typeof Nguaikuan]

// 輸入標籤: インプット タブ
export const ShyonipPieuchiem = {
  dziwbyo: 0,
  dziwxeng: 1,
  dziqrim: 2,
} as const
export type ShyonipPieuchiem = (typeof ShyonipPieuchiem)[keyof typeof ShyonipPieuchiem]
