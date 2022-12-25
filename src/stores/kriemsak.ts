import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dziwqrim from "../sryokio/dziwqrim.json";
import dziwtyong from "../sryokio/dziwtyong.json";
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
  dziwdu: string;
  dziwdu_QhSh: string;
  zyepheng: string;
  ChX_ziosryo_sishieng: string;
  ChX_ziosryo_xrynmyuk: string;
  ChX_ziosryo_sieuxryn: string;
  diangko_xrynbu: string;
  ChX_dzankryen_pyunlyi: string;
  ChX_dzankryen: string[];
  pyanchet_ChX: string;
  pyanchet_ChX_tyoshiek: string;
  pyanchet_XX: string;
  pyanchet_XX_tyoshiek: string;
  pyanchet_KX: string;
  pyanchet_KX_tyoshiek: string;
  pyanchet_DzX: string;
  pyanchet_DzX_tyoshiek: string;
  QhZQh_shienglyi: string;
  QhZQh_xrynlyi: string;
  QhZQh_deulyi: string;
  giwtha_potyo: string;
  ngrietyo: string;
  thongqitmra: string;
}

export const jyongKriemsakkho = defineStore("kriemsak", () => {
  const qhandziwShyonip = ref("");
  const kriemsakKetkua = ref(<Dziwxeng[]>[]);
  const srioSyenKriemsakKetkua = ref(<Dziwxeng>{});
  const kriemsakKetkuaDziwqrim = ref(<Dziwqrim[]>[]);

  const twkqhandziwShyonip = computed(() => qhandziwShyonip.value);
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value);
  const twkKriemsakKetkuaDziwqrim = computed(
    () => kriemsakKetkuaDziwqrim.value
  );
  const twkSrioSyenKriemsakKetkua = computed(
    () => srioSyenKriemsakKetkua.value
  );

  const triwKriemsakKetkua = () => {
    kriemsakKetkua.value = [];
    for (const dziwbyo of qhandziwShyonip.value) {
      const dziwbyoKriemsakKetkua = dziwxeng.filter((tuiziang) => {
        return tuiziang.dziw === dziwbyo;
      });
      for (const yeah of dziwbyoKriemsakKetkua) {
        kriemsakKetkua.value.push(yeah);
      }
    }
  };

  const syendrakKriemsakKetkua = (tuiziang: Dziwxeng) => {
    srioSyenKriemsakKetkua.value = tuiziang;
    kriemsakKetkuaDziwqrim.value = [];
    const dziwqrimKriemsakKetkua = dziwqrim.filter((hoge) => {
      return hoge.dziwdu === tuiziang.dziw;
    });
    for (const yeah of dziwqrimKriemsakKetkua) {
      kriemsakKetkuaDziwqrim.value.push(yeah);
    }
  };

  return {
    qhandziwShyonip,
    kriemsakKetkua,
    srioSyenKriemsakKetkua,
    twkqhandziwShyonip,
    twkKriemsakKetkua,
    twkKriemsakKetkuaDziwqrim,
    twkSrioSyenKriemsakKetkua,
    triwKriemsakKetkua,
    syendrakKriemsakKetkua,
  };
});
