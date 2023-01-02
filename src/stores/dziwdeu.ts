import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dziwtyong from "../sryokio/dziwtyong.json";
import dziwxeng from "../sryokio/dziwxeng.json";
import dziwqrim from "../sryokio/dziwqrim.json";
import tiengdziw from "../sryokio/tiengdziw.json";
import type { DziwqrimSryokio, DziwxengSryokio } from "@/assets/lyixeng";
import { jyongLeksriwkho } from "./leksriw";

export const jyongDziwdeukho = defineStore("dziwdeu", () => {
  const srioSyenDziwdu = ref("");
  const srioSyenDziwxeng = ref(<DziwxengSryokio[]>[]);
  const srioSyenDziwqrim = ref(<DziwqrimSryokio[]>[]);
  const srioSyenDziwbyo = ref("");
  const srioSyenJiwtheidziw = ref("");

  const twkSrioSyenDziwdu = computed(() => srioSyenDziwdu.value);
  const twkSrioSyenDziwxeng = computed(() => srioSyenDziwxeng.value);
  const twkSrioSyenDziwqrim = computed(() => srioSyenDziwqrim.value);

  const triwSrioSyenDziwdu = (grien: string) => {
    srioSyenDziwdu.value = "";
    srioSyenDziwxeng.value = [];
    srioSyenDziwqrim.value = [];
    const zyoktiengLietprieu = tiengdziw.filter((tuiziang) => {
      return tuiziang.zyokdziw === grien;
    });
    for (const driw of zyoktiengLietprieu) {
      srioSyenDziwdu.value = srioSyenDziwdu.value + driw.tiengdziw;
    }
    if (srioSyenDziwdu.value.length === 1) {
      triwSrioSyenXengqrim(srioSyenDziwdu.value);
    } else if (srioSyenDziwdu.value.includes(grien)) {
      triwSrioSyenXengqrim(grien);
    } else {
      srioSyenDziwbyo.value = "";
    }
  };
  const triwSrioSyenXengqrim = (grien: string) => {
    const leksriwkho = jyongLeksriwkho();

    srioSyenDziwbyo.value = grien;
    leksriwkho.kraDziwbyo(grien);
    const jiwtheiSinsiwk = dziwtyong.find((tuiziang) => {
      return tuiziang.dziw === grien;
    });
    const jiwtheidziwco = <string[]>[];
    !jiwtheiSinsiwk?.syenjyongdziw
      ? true
      : jiwtheidziwco.push(`選用“${jiwtheiSinsiwk.syenjyongdziw}”`);
    !jiwtheiSinsiwk?.krenqhruadziw
      ? true
      : jiwtheidziwco.push(`簡作“${jiwtheiSinsiwk.krenqhruadziw}”`);
    !jiwtheiSinsiwk?.nitpundziw
      ? true
      : jiwtheidziwco.push(`日作“${jiwtheiSinsiwk.nitpundziw}”`);
    srioSyenJiwtheidziw.value = jiwtheidziwco.join("，");
    !srioSyenJiwtheidziw.value
      ? true
      : (srioSyenJiwtheidziw.value = srioSyenJiwtheidziw.value.concat("。"));

    srioSyenDziwxeng.value = dziwxeng.filter((tuiziang) => {
      return tuiziang.dziw === grien;
    });
    srioSyenDziwqrim.value = dziwqrim.filter((tuiziang) => {
      return tuiziang.dziw === grien;
    });
  };

  return {
    srioSyenDziwdu,
    srioSyenDziwxeng,
    srioSyenDziwqrim,
    srioSyenDziwbyo,
    srioSyenJiwtheidziw,
    twkSrioSyenDziwdu,
    twkSrioSyenDziwxeng,
    twkSrioSyenDziwqrim,
    triwSrioSyenDziwdu,
    triwSrioSyenXengqrim,
  };
});
