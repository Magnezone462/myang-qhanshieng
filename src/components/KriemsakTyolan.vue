<script setup lang="ts">
import { jyongXeithongkho } from "@/stores/xeithong";
import { jyongDziwqrimKriemsakkho } from "@/stores/dziwqrimKriemsak";
import { jyongDziwdeukho } from "@/stores/dziwdeu";
import type { DziwqrimSryokio } from "@/assets/lyixeng";

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho();
const dziwdeu = jyongDziwdeukho();
const xeithongkho = jyongXeithongkho();

const qanZyepheng = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioNipZyepheng(tuiziang.zyepheng);
  xeithongkho.kriemsakPenlanPieuchiem = "qrit";
};

const qanShiwxryn = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioSyenShiwxryn(tuiziang.shiwxryn);
  xeithongkho.kriemsakPenlanPieuchiem = "qrit";
};

const twkDryenthungQrimlyi = (dziwqrim: DziwqrimSryokio) => {
  return [
    dziwqrim.shiep,
    dziwqrim.qho,
    dziwqrim.twng,
    dziwqrim.deu,
    dziwqrim.xryn,
    dziwqrim.shieng,
  ].join("");
};
const twkChX = (dziwqrim: DziwqrimSryokio) => {
  const tyo =
    dziwqrim.pyanchet_ChX_tyo !== "" ? `（${dziwqrim.pyanchet_ChX_tyo}）` : "";
  return [dziwqrim.pyanchet_ChX, tyo].join("");
};
const twkXX = (dziwqrim: DziwqrimSryokio) => {
  const tyo =
    dziwqrim.pyanchet_XX_tyo !== "" ? `（${dziwqrim.pyanchet_XX_tyo}）` : "";
  return [dziwqrim.pyanchet_XX, tyo].join("");
};
const twkKX = (dziwqrim: DziwqrimSryokio) => {
  const tyo =
    dziwqrim.pyanchet_KX_tyo !== "" ? `（${dziwqrim.pyanchet_KX_tyo}）` : "";
  return [dziwqrim.pyanchet_KX, tyo].join("");
};
const twkDzX = (dziwqrim: DziwqrimSryokio) => {
  const tyo =
    dziwqrim.pyanchet_DzX_tyo !== "" ? `（${dziwqrim.pyanchet_DzX_tyo}）` : "";
  return [dziwqrim.pyanchet_DzX, tyo].join("");
};
const twkQhZQh = (dziwqrim: DziwqrimSryokio) => {
  return [dziwqrim.QhZQh_shieng, dziwqrim.QhZQh_xryn, dziwqrim.QhZQh_deu].join(
    ""
  );
};
</script>

<template>
  <v-container fluid>
    <v-select
      label="字種"
      v-model="dziwdeu.srioSyenDziwbyo"
      :items="[...dziwdeu.srioSyenDziwdu]"
      @update:modelValue="dziwdeu.triwSrioSyenXengqrim(dziwdeu.srioSyenDziwbyo)"
      variant="underlined"
      density="compact"
    />
    <v-row>
      <v-col>
        <h2>{{ dziwdeu.srioSyenDziwbyo }}</h2>
        <p>{{ dziwdeu.srioSyenJiwtheidziw }}</p>
        <div
          v-for="tuiziang in dziwdeu.twkSrioSyenDziwqrim"
          :key="tuiziang.pieutiwbyo"
        >
          <v-card>
            <v-card-title
              @click="qanZyepheng(tuiziang)"
              style="cursor: pointer"
            >
              {{ tuiziang.zyepheng }}
            </v-card-title>
            <v-card-subtitle>
              {{ twkDryenthungQrimlyi(tuiziang) }}
              <span class="hei-sui-in" @click="qanShiwxryn(tuiziang)">
                {{ tuiziang.shiwxryn }}
              </span>
            </v-card-subtitle>
            <v-card-text>
              <div v-if="tuiziang.pyanchet_ChX">
                {{ `《切韵》${twkChX(tuiziang)}` }}
              </div>
              <div v-if="tuiziang.pyanchet_XX">
                {{ `《王韵》${twkXX(tuiziang)}` }}
              </div>
              <div v-if="tuiziang.pyanchet_KX">
                {{ `《廣韵》${twkKX(tuiziang)}` }}
              </div>
              <div v-if="tuiziang.pyanchet_DzX">
                {{ `《集韵》${twkDzX(tuiziang)}` }}
              </div>
              <div v-if="tuiziang.QhZQh_shieng">
                {{ `《漢辭海》${twkQhZQh(tuiziang)}` }}
              </div>
              <div v-if="tuiziang.qrimtyo">
                {{ `釋音：${tuiziang.qrimtyo}` }}
              </div>
              <div v-if="tuiziang.ngrietyo">
                {{ `釋音義：${tuiziang.ngrietyo}` }}
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="css">
.hei-sui-in {
  border: 1px solid;
  cursor: pointer;
}
</style>
