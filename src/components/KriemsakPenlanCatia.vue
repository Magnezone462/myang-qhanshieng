<script setup lang="ts">
import { jyongXeithongkho } from "@/stores/xeithong";
import { jyongDziwbyoKriemsakkho } from "../stores/dziwbyoKriemsak";
import { jyongDziwqrimKriemsakkho } from "../stores/dziwqrimKriemsak";
import { jyongDziwdeukho } from "../stores/dziwdeu";
import shiwxryn from "../sryokio/shiwxryn.json";
import shiengmu from "../sryokio/shiengmu.json";

const xeithongkho = jyongXeithongkho();
const dziwbyoKriemsakkho = jyongDziwbyoKriemsakkho();
const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho();
const dziwdeukho = jyongDziwdeukho();

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang);
};

const qhruaSikrokXaumra = (xaumraco: string[]) => xaumraco.join("、");
</script>

<template>
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanThryutheiCatia"
    location="left"
  >
    <v-tabs v-model="xeithongkho.kriemsakPenlanPieuchiemCatia" fixed-tabs>
      <v-tab value="krap">字符</v-tab>
      <v-tab value="qrit">字音</v-tab>
    </v-tabs>
    <v-window v-model="xeithongkho.kriemsakPenlanPieuchiemCatia">
      <v-window-item value="krap">
        <v-sheet class="pa-4">
          <v-text-field
            v-model="dziwbyoKriemsakkho.srioNipQhandziwthyen"
            label="漢字"
            placeholder="天地玄黄宇宙洪荒"
            clearable
          />
          <v-btn block rounded @click="dziwbyoKriemsakkho.triwKriemsakKetkua()">
            檢索
          </v-btn>
        </v-sheet>

        <v-divider />

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
              placeholder="tuŋ"
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
          <v-btn block rounded @click="dziwqrimKriemsakkho.triwKriemsakKetkua">
            檢索
          </v-btn>
        </v-sheet>

        <v-divider />

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
</template>
