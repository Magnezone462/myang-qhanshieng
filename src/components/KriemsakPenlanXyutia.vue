<script setup lang="ts">
import { computed, ref } from "vue";
import { jyongDziwdeukho } from "@/stores/dziwdeu";
import { jyongShiochiemkho } from "@/stores/shiochiem";
import { jyongXeithongkho } from "@/stores/xeithong";

const dziwdeukho = jyongDziwdeukho();
const xeithongkho = jyongXeithongkho();
const shiochiemkho = jyongShiochiemkho();

const diepyuByukxryiQannryuKhroknin = ref(false);

const diepyuByukxryiQannryuJiwDeng = computed(
  () => !shiochiemkho.dziwbyoco.length
);

const byukxryiQannryuuNgransriwk = computed(() =>
  diepyuByukxryiQannryuKhroknin.value ? "error" : "warning"
);

const qanByukxryiQannryu = () => {
  if (diepyuByukxryiQannryuKhroknin.value) {
    shiochiemkho.byukDziwbyoco();
    diepyuByukxryiQannryuKhroknin.value = false;
  } else {
    diepyuByukxryiQannryuKhroknin.value = true;
  }
};
</script>

<template>
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanThryutheiXyutia"
    location="right"
  >
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

    <v-divider />

    <v-sheet class="pa-4">
      <v-btn
        block
        :color="byukxryiQannryuuNgransriwk"
        @click="qanByukxryiQannryu()"
        :disabled="diepyuByukxryiQannryuJiwDeng"
      >
        <v-icon> mdi-delete </v-icon>
      </v-btn>
    </v-sheet>
  </v-navigation-drawer>
</template>
