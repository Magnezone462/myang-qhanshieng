<script setup lang="ts">
import { ref } from "vue";
import { jyongDziwbyoKriemsakkho } from "./stores/dziwbyoKriemsak";
import {
  jyongDziwqrimKriemsakkho,
  type Dziwqrim,
} from "./stores/dziwqrimKriemsak";
import { jyongDziwdeukho } from "./stores/dziwdeu";
import shiwxryn from "./sryokio/shiwxryn.json";
import shiengmu from "./sryokio/shiengmu.json";

type Thryuthei = boolean | null;
type PenlanPieuchiem = string | null;

const dziwbyoKriemsakkho = jyongDziwbyoKriemsakkho();
const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho();
const dziwdeu = jyongDziwdeukho();

const thryuthei = ref(<Thryuthei>null);
const penlanPieuchiem = ref(<PenlanPieuchiem>null);

const qanZyepheng = (tuiziang: Dziwqrim) => {
  dziwqrimKriemsakkho.triwSrioNipZyepheng(tuiziang.zyepheng);
  penlanPieuchiem.value = "qrit";
};

const qanShiwxryn = (tuiziang: Dziwqrim) => {
  dziwqrimKriemsakkho.triwSrioSyenShiwxryn(tuiziang.shiwxryn);
  penlanPieuchiem.value = "qrit";
};

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeu.triwSrioSyenDziwdu(tuiziang);
};

const xuanThryuthei = () => {
  thryuthei.value = !thryuthei.value;
};
const qhruaSikrokXaumra = (xaumraco: string[]) => xaumraco.join("、");
const twkDryenthungQrimlyi = (dziwqrim: Dziwqrim) => {
  return [
    dziwqrim.shiep,
    dziwqrim.qho,
    dziwqrim.twng,
    dziwqrim.deu,
    dziwqrim.xryn,
    dziwqrim.shieng,
  ].join("");
};
const twkChX = (dziwqrim: Dziwqrim) => {
  const tyo =
    dziwqrim.pyanchet_ChX_tyo !== "" ? `（${dziwqrim.pyanchet_ChX_tyo}）` : "";
  return [dziwqrim.pyanchet_ChX, tyo].join("");
};
const twkXX = (dziwqrim: Dziwqrim) => {
  const tyo =
    dziwqrim.pyanchet_XX_tyo !== "" ? `（${dziwqrim.pyanchet_XX_tyo}）` : "";
  return [dziwqrim.pyanchet_XX, tyo].join("");
};
const twkKX = (dziwqrim: Dziwqrim) => {
  const tyo =
    dziwqrim.pyanchet_KX_tyo !== "" ? `（${dziwqrim.pyanchet_KX_tyo}）` : "";
  return [dziwqrim.pyanchet_KX, tyo].join("");
};
const twkDzX = (dziwqrim: Dziwqrim) => {
  const tyo =
    dziwqrim.pyanchet_DzX_tyo !== "" ? `（${dziwqrim.pyanchet_DzX_tyo}）` : "";
  return [dziwqrim.pyanchet_DzX, tyo].join("");
};
const twkQhZQh = (dziwqrim: Dziwqrim) => {
  return [dziwqrim.QhZQh_shieng, dziwqrim.QhZQh_xryn, dziwqrim.QhZQh_deu].join(
    ""
  );
};
</script>

<template>
  <v-app>
    <v-system-bar> </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="xuanThryuthei()"></v-app-bar-nav-icon>
      <v-toolbar-title>網絡本《漢字文聲義》</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer v-model="thryuthei" bottom>
      <v-tabs v-model="penlanPieuchiem" fixed-tabs>
        <v-tab value="krap">字符</v-tab>
        <v-tab value="qrit">字音</v-tab>
      </v-tabs>
      <v-window v-model="penlanPieuchiem">
        <v-window-item value="krap">
          <v-sheet class="pa-4">
            <v-text-field
              v-model="dziwbyoKriemsakkho.srioNipQhandziwthyen"
              label="漢字"
              placeholder="天地玄黄宇宙洪荒"
              clearable
            />
            <v-btn
              block
              rounded
              @click="dziwbyoKriemsakkho.triwKriemsakKetkua()"
            >
              檢索
            </v-btn>
          </v-sheet>

          <v-divider></v-divider>

          <v-list>
            <v-list-item
              v-for="tuiziang in dziwbyoKriemsakkho.twkKriemsakKetkua"
              :key="tuiziang.pieutiwbyo"
              @click="qanKriemsakKetkua(tuiziang.dziw)"
              link
            >
              <v-list-item-title>{{ tuiziang.dziw }}</v-list-item-title>
              {{ qhruaSikrokXaumra(tuiziang.sikrok_xaumra) }}
            </v-list-item>
          </v-list>
        </v-window-item>
        <v-window-item value="qrit">
          <v-sheet class="pa-4">
            <v-col>
              <v-text-field
                v-model="dziwqrimKriemsakkho.srioNipZyepheng"
                label="隋拼"
                placeholder="Thendʼî xuenxuaŋ"
                density="compact"
                variant="underlined"
                clearable
              />
              <v-select
                label="平水韵"
                v-model="dziwqrimKriemsakkho.srioSyenShiwxryn"
                :items="shiwxryn"
                item-title="xryn_driang"
                item-value="xryn_tuan"
                variant="underlined"
                density="compact"
                clearable
              />
              <v-select
                label="聲母"
                v-model="dziwqrimKriemsakkho.srioSyenShiengmu"
                :items="shiengmu"
                item-title="shiengmu_ziangdzieng"
                item-value="shiengmu"
                variant="underlined"
                density="compact"
                clearable
              />
            </v-col>
            <v-btn
              block
              rounded
              @click="dziwqrimKriemsakkho.triwKriemsakKetkua"
            >
              檢索
            </v-btn>
          </v-sheet>

          <v-divider></v-divider>

          <v-list>
            <v-list-item
              v-for="tuiziang in dziwqrimKriemsakkho.twkKriemsakKetkua"
              :key="tuiziang.pieutiwbyo"
              @click="qanKriemsakKetkua(tuiziang.dziw)"
              link
            >
              <v-list-item-title>{{ tuiziang.dziw }}</v-list-item-title>
              {{ tuiziang.zyepheng }}
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <v-tabs v-model="dziwdeu.srioSyenTyolanPieuchiem">
          <v-tab
            v-for="dziwbyo in dziwdeu.srioSyenDziwdu"
            :key="dziwbyo"
            :value="dziwbyo"
            @click="dziwdeu.triwSrioSyenXengqrim(dziwbyo)"
          >
            {{ dziwbyo }}
          </v-tab>
        </v-tabs>
        <v-row>
          <v-col>
            <h2>{{ dziwdeu.srioSyenDziwbyo }}</h2>
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
    </v-main>
  </v-app>
</template>

<style scoped lang="css">
.hei-sui-in {
  border: 1px solid;
  cursor: pointer;
}
</style>
