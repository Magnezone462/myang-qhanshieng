// 檢索字音方式: サーチ プロナンシエーション モード
export const KriemsakDziwqrimPyangshiwk = {
  zyepheng: 0,
  briengshyixryn: 1,
  twixrynxrok: 2,
} as const
export type KriemsakDziwqrimPyangshiwk =
  (typeof KriemsakDziwqrimPyangshiwk)[keyof typeof KriemsakDziwqrimPyangshiwk]

// 檢索標籤: サーチ タブ
export const KriemsakPieuchiem = {
  dziwbyo: 0,
  dziqrim: 1,
  dziwxeng: 2,
  shiochiem: 3,
  leksriw: 4,
} as const
export type KriemsakPieuchiem = (typeof KriemsakPieuchiem)[keyof typeof KriemsakPieuchiem]

// 檢索字形方式: サーチ グリフ モード
export const KriemsakDziwxengPyangshiwk = {
  sikrokXaumra: 0,
  QhZQhBushyu: 1,
} as const
export type KriemsakDziwxengPyangshiwk =
  (typeof KriemsakDziwxengPyangshiwk)[keyof typeof KriemsakDziwxengPyangshiwk]

// 外觀: アピアランス
export const Nguaikuan = {
  chiensriwk: 'light',
  shimsriwk: 'dark',
  dzidung: 'automatic',
} as const
export type Nguaikuan = (typeof Nguaikuan)[keyof typeof Nguaikuan]
