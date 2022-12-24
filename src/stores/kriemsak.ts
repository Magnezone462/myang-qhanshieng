import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dziwxengSryokio from "../sryokio/dziwxeng.json";

interface DziwxengSryokio {
  pieutiwbyo: string;
  dziw: string;
  dziw_QhSh: string;
  dziwxeng: string;
  sikrok_xaumra: string[];
  thongqitmra: string;
  pryentyong: string;
  tyoshiek: string;
}

export const useKriemsakChangkho = defineStore("kriemsak", () => {
  const qhandziw = ref("");
  const qhandziwco = ref(<string[]>[]);
  const kriemsakKetkua = ref(<DziwxengSryokio[]>[]);

  const shyoThytQhandziw = computed(() => qhandziw.value);
  const shyoKriemsakKetkua = computed(() => kriemsakKetkua.value);

  const shyonipQhandziw = (cwixa: string) => {
    qhandziwco.value = [];
    for (const dziwbyo of cwixa) {
      qhandziwco.value.push(dziwbyo);
    }
  };

  const makeKriemsakKetkua = () => {
    kriemsakKetkua.value = [];
    for (const dziwbyo of qhandziw.value) {
      const dziwbyoKriemsakKetkua = dziwxengSryokio.filter((tuiziang) => {
        return tuiziang.dziw === dziwbyo;
      });
      console.log(dziwbyoKriemsakKetkua);
      for (const yeah of dziwbyoKriemsakKetkua) {
        kriemsakKetkua.value.push(yeah);
      }
    }
  };

  return {
    qhandziw,
    qhandziwco,
    kriemsakKetkua,
    shyoThytQhandziw,
    shyoKriemsakKetkua,
    shyonipQhandziw,
    makeKriemsakKetkua,
  };
});
