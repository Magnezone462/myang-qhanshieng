import { ref, computed } from "vue";
import { defineStore } from "pinia";
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

export const jyongKriemsakkho = defineStore("dziwbyoKriemsak", () => {
  const srioNipQhandziwthyen = ref("");
  const kriemsakKetkua = ref(<Dziwxeng[]>[]);

  const twkSrioNipQhandziwthyen = computed(() => srioNipQhandziwthyen.value);
  const twkKriemsakKetkua = computed(() => kriemsakKetkua.value);

  const triwSrioNipQhandziwthyen = (grien: string) => {
    srioNipQhandziwthyen.value = grien;
  };

  const triwKriemsakKetkua = () => {
    kriemsakKetkua.value = [];
    for (const dziwbyo of srioNipQhandziwthyen.value) {
      const dziwbyoKriemsakKetkua = dziwxeng.filter((tuiziang) => {
        return tuiziang.dziw === dziwbyo;
      });
      for (const tuiziang of dziwbyoKriemsakKetkua) {
        kriemsakKetkua.value.push(tuiziang);
      }
    }
  };

  return {
    srioNipQhandziwthyen,
    kriemsakKetkua,
    twkSrioNipQhandziwthyen,
    twkKriemsakKetkua,
    triwSrioNipQhandziwthyen,
    triwKriemsakKetkua,
  };
});
