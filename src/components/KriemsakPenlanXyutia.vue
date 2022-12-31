<script setup lang="ts">
import { jyongXeithongkho } from "@/stores/xeithong";

const xeithongkho = jyongXeithongkho();
</script>

<template>
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanThryutheiXyutia"
    location="right"
  >
  </v-navigation-drawer>
</template>
