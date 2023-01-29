/**
 * 字符資料: キャラクター データ
 */
export interface DziwbyoCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  thongqitmra: string
}

/**
 * 字音甲資料: プロナンシエーション エー データ
 */
export interface DziwqrimKrapCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  zyepheng: string
  zyephengNguaidziw: string
  shiwxryn: string | null
  xrynshiep: string | null
  khwixwp: string | null
  twixryi: string | null
  sishieng: string | null
  xrynmyuk: string | null
  shiengmu: string | null
  xrynmu: string | null
  thongqitmra: string
}

/**
 * 字音乙資料: プロナンシエーション ビー データ
 */
export interface DziwqrimQritCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  zyepheng: string
  zyephengNguaidziw: string
  ChXZiosryoSishieng: string | null
  ChXZiosryoXrynmyuk: string | null
  ChXZiosryoSieuxryn: string | null
  ChXDzankryenlyi: string | null
  ChXDzankryen: string[]
  ChXPyanchet: string | null
  ChXPyanchetPotyo: string
  XXPyanchet: string | null
  XXPyanchetPotyo: string
  KXPyanchet: string | null
  KXPyanchetPotyo: string
  DzXPyanchet: string | null
  DzXPyanchetPotyo: string
  QhZQhShienglyi: string | null
  QhZQhXrynlyi: string | null
  QhZQhDeuyi: string | null
  thongqitmra: string
}

/**
 * 字音丙資料: プロナンシエーション シー データ
 */
export interface DziwqrimPriengCileu {
  pieutiwbyo: string
  dziwbyo: string
  dziwbyoNguaidziw: string
  zyepheng: string
  zyephengNguaidziw: string
  diangkoXrynbu: string | null
  ZNgShiwxryn: string
  ZNgShiwxrynPotyo: string
  qrimtyo: string
  ngrietyo: string
  thongqitmra: string
}

/**
 * 字音總資料: プロナンシエーション ジェネラル データ
 */
export interface DziwqrimCungCileu extends DziwqrimKrapCileu, DziwqrimQritCileu, DziwqrimPriengCileu {}

/**
 * 字形四角號碼資料: グリフ フォー コーナー コード データ
 */
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
