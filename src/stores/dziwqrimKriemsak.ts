import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dziwqrim from "../sryokio/dziwqrim.json";

export interface Dziwqrim {
  pieutiwbyo: string;
  dziw: string;
  dziw_biekhuet: string;
  zyepheng: string;
  zyepheng_biekhuet: string;
  shiwxryn: string | null;
  shiep: string | null;
  qho: string | null;
  twng: string | null;
  deu: string | null;
  xryn: string | null;
  shieng: string | null;
  xrynmu: string | null;
  ChX_ziosryo_sishieng: string | null;
  ChX_ziosryo_xrynmyuk: string | null;
  ChX_ziosryo_sieuxryn: string | null;
  diangko_xryn: string | null;
  ChX_dzankryen_lyi: string | null;
  ChX_dzankryen: string[];
  pyanchet_ChX: string | null;
  pyanchet_ChX_tyo: string;
  pyanchet_XX: string | null;
  pyanchet_XX_tyo: string;
  pyanchet_KX: string | null;
  pyanchet_KX_tyo: string;
  pyanchet_DzX: string | null;
  pyanchet_DzX_tyo: string;
  QhZQh_shieng: string | null;
  QhZQh_xryn: string | null;
  QhZQh_deu: string | null;
  ZNg_shiwxryn: string;
  ZNg_shiwxryn_tyo: string;
  qrimtyo: string;
  ngrietyo: string;
  thongqitmra: string;
}

type SrioNipZyepheng = string | null;
type SrioSyenShiwxryn = string | null;
type SrioSyenShiengmu = string | null;

export const jyongDziwqrimKriemsakkho = defineStore("dziwqrimKriemsak", () => {
  const srioNipZyepheng = ref(<SrioNipZyepheng>null);
  const srioSyenShiwxryn = ref(<SrioSyenShiwxryn>null);
  const srioSyenShiengmu = ref(<SrioSyenShiengmu>null);
  const kriemsakKetkua = ref(<Dziwqrim[]>[]);

  const twkSrioNipZyepheng = computed(() => srioNipZyepheng.value);
  const twkSrioSyenShiwxryn = computed(() => srioSyenShiwxryn.value);
  const twkSrioSyenShiengmu = computed(() => srioSyenShiengmu.value);
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value);

  const triwSrioNipZyepheng = (grien: SrioNipZyepheng) => {
    srioNipZyepheng.value = grien;
  };
  const triwSrioSyenShiwxryn = (grien: SrioSyenShiwxryn) => {
    srioSyenShiwxryn.value = grien;
  };
  const triwSrioSyenShiengmu = (grien: SrioSyenShiengmu) => {
    srioSyenShiwxryn.value = grien;
  };
  const triwKriemsakKetkua = () => {
    kriemsakKetkua.value = dziwqrim.filter((tuiziang) => {
      const lioZyepheng = srioNipZyepheng.value
        ? tuiziang.zyepheng === srioNipZyepheng.value
        : true;
      const lioShiwxryn = srioSyenShiwxryn.value
        ? tuiziang.shiwxryn === srioSyenShiwxryn.value
        : true;
      const lioShiengmu = srioSyenShiengmu.value
        ? tuiziang.shieng === srioSyenShiengmu.value
        : true;

      return lioZyepheng && lioShiwxryn && lioShiengmu;
    });
  };

  return {
    srioNipZyepheng,
    srioSyenShiwxryn,
    srioSyenShiengmu,
    twkSrioNipZyepheng,
    twkSrioSyenShiwxryn,
    twkSrioSyenShiengmu,
    twkKriemsakKetkua,
    triwSrioNipZyepheng,
    triwSrioSyenShiwxryn,
    triwSrioSyenShiengmu,
    triwKriemsakKetkua,
  };
});
