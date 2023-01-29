/**
 * 字符資料: キャラクター データ
 */
export interface DziwbyoCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  thongqitmra: string
}

// Dziwxeng.json no kata tegi desu.
export interface DziwxengSikrokXaumraCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  dziwxeng: string
  sikrokXaumra: string[]
  thongqitmra: string
  pryentyong: string
  tyoshiek: string
}

/**
 * 字音資料: プロナンシエーション データ
 */
export interface DziwqrimCileu {
  pieutiwbyo: string
  dziw: string
  dziw_biekhuet: string
  zyepheng: string
  zyepheng_biekhuet: string
  shiwxryn: string | null
  shiep: string | null
  qho: string | null
  twng: string | null
  deu: string | null
  xryn: string | null
  shieng: string | null
  xrynmu: string | null
  ChX_ziosryo_sishieng: string | null
  ChX_ziosryo_xrynmyuk: string | null
  ChX_ziosryo_sieuxryn: string | null
  diangko_xryn: string | null
  ChX_dzankryen_lyi: string | null
  ChX_dzankryen: string[]
  pyanchet_ChX: string | null
  pyanchet_ChX_tyo: string
  pyanchet_XX: string | null
  pyanchet_XX_tyo: string
  pyanchet_KX: string | null
  pyanchet_KX_tyo: string
  pyanchet_DzX: string | null
  pyanchet_DzX_tyo: string
  QhZQh_shieng: string | null
  QhZQh_xryn: string | null
  QhZQh_deu: string | null
  ZNg_shiwxryn: string
  ZNg_shiwxryn_tyo: string
  qrimtyo: string
  ngrietyo: string
  thongqitmra: string
}
