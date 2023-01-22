<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanCatiaDziwbyo from './KriemsakPenlanCatiaDziwbyo.vue'
import KriemsakPenlanCatiaDziwqrim from './KriemsakPenlanCatiaDziwqrim.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <v-tabs
    v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemKriemsak"
    fixed-tabs
  >
    <v-tab value="krap">字符</v-tab>
    <v-tab value="qrit">字音</v-tab>
  </v-tabs>
  <v-window v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemKriemsak">
    <v-window-item value="krap">
      <KriemsakPenlanCatiaDziwbyo />
    </v-window-item>
    <v-window-item value="qrit">
      <KriemsakPenlanCatiaDziwqrim />
    </v-window-item>
  </v-window>
</template>
