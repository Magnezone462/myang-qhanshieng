import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dziwqrim from "../sryokio/dziwqrim.json";
// import dziwtyong from "../sryokio/dziwtyong.json";
import dziwxeng from "../sryokio/dziwxeng.json";

interface Dziwxeng {
  pieutiwbyo: string;
  dziw: string;
  dziw_QhSh: string;
  dziwxeng: string;
  sikrok_xaumra: string[];
  thongqitmra: string;
  pryentyong: string;
  tyoshiek: string;
}

interface Dziwqrim {
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

export const jyongDziwdeukho = defineStore("dziwdeu", () => {
  const srioSyenDziwdu = ref("");
  const srioSyenDziwxeng = ref(<Dziwxeng[]>[]);
  const srioSyenDziwqrim = ref(<Dziwqrim[]>[]);

  const twkSrioSyenDziwdu = computed(() => srioSyenDziwdu.value);
  const twkSrioSyenDziwxeng = computed(() => srioSyenDziwxeng.value);
  const twkSrioSyenDziwqrim = computed(() => srioSyenDziwqrim.value);

  const triwSrioSyenDziwdu = (grian: string) => {
    srioSyenDziwdu.value = grian;
    srioSyenDziwxeng.value = dziwxeng.filter((tuiziang) => {
      return tuiziang.dziw === grian;
    });
    srioSyenDziwqrim.value = dziwqrim.filter((tuiziang) => {
      return tuiziang.dziw === grian;
    });
  };

  return {
    srioSyenDziwdu,
    srioSyenDziwxeng,
    srioSyenDziwqrim,
    twkSrioSyenDziwdu,
    twkSrioSyenDziwxeng,
    twkSrioSyenDziwqrim,
    triwSrioSyenDziwdu,
  };
});
