<script setup lang="ts">
import { computed } from "vue";
import { jyongDziwdeukho } from "@/stores/dziwdeu";
import { jyongLeksriwkho } from "@/stores/leksriw";
import { jyongShiochiemkho } from "@/stores/shiochiem";
import { jyongXeithongkho } from "@/stores/xeithong";

const dziwdeukho = jyongDziwdeukho();
const leksriwkho = jyongLeksriwkho();
const shiochiemkho = jyongShiochiemkho();
const xeithongkho = jyongXeithongkho();

const diepyuQannryuJiwDeng = computed(() =>
  xeithongkho.kriemsakPenlanXyutiaPieuchiem === "krap"
    ? !shiochiemkho.dziwbyoco.length
    : !leksriwkho.dziwbyoco.length
);

const qanByukxryiQannryu = () => {
  if (xeithongkho.kriemsakPenlanXyutiaPieuchiem === "krap") {
    shiochiemkho.byukDziwbyoco();
  } else {
    leksriwkho.byukDziwbyoco();
  }
};
</script>

<template>
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanXyutiaThryuthei"
    location="right"
  >
    <v-tabs v-model="xeithongkho.kriemsakPenlanXyutiaPieuchiem" fixed-tabs>
      <v-tab value="krap">書籤</v-tab>
      <v-tab value="qrit">歷史</v-tab>
    </v-tabs>
    <v-window v-model="xeithongkho.kriemsakPenlanXyutiaPieuchiem">
      <v-window-item value="krap">
        <v-list>
          <v-list-item
            v-for="dziwbyo in shiochiemkho.dziwbyoco"
            :key="dziwbyo"
            @click="dziwdeukho.triwSrioSyenDziwdu(dziwbyo)"
            link
          >
            <v-list-item-title>{{ dziwbyo }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-window-item>

      <v-window-item value="qrit">
        <v-list>
          <v-list-item
            v-for="dziwbyo in leksriwkho.dziwbyocoTentau"
            :key="dziwbyo"
            @click="dziwdeukho.triwSrioSyenDziwdu(dziwbyo)"
            link
          >
            <v-list-item-title>{{ dziwbyo }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-window-item>
    </v-window>

    <v-divider />

    <v-sheet class="pa-4">
      <v-btn
        block
        color="error"
        @click="qanByukxryiQannryu()"
        :disabled="diepyuQannryuJiwDeng"
      >
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>
