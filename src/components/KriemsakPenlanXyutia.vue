<script setup lang="ts">
import { jyongDziwdeukho } from "@/stores/dziwdeu";
import { jyongShiochiemkho } from "@/stores/shiochiem";
import { jyongXeithongkho } from "@/stores/xeithong";

const dziwdeukho = jyongDziwdeukho();
const xeithongkho = jyongXeithongkho();
const shiochiemkho = jyongShiochiemkho();
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
  </v-navigation-drawer>
</template>
