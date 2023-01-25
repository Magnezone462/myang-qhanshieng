<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanCatiaDziwbyo from './KriemsakPenlanCatiaDziwbyo.vue'
import KriemsakPenlanCatiaDziwqrim from './KriemsakPenlanCatiaDziwqrim.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VTabs
    v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemKriemsak"
    fixed-tabs
  >
    <VTab value="krap">字符</VTab>
    <VTab value="qrit">字音</VTab>
  </VTabs>
  <VWindow v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemKriemsak">
    <VWindowItem value="krap">
      <KriemsakPenlanCatiaDziwbyo />
    </VWindowItem>
    <VWindowItem value="qrit">
      <KriemsakPenlanCatiaDziwqrim />
    </VWindowItem>
  </VWindow>
</template>
