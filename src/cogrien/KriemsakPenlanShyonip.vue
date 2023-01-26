<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanShyonipDziwbyo from './KriemsakPenlanShyonipDziwbyo.vue'
import KriemsakPenlanShyonipDziwqrim from './KriemsakPenlanShyonipDziwqrim.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VTabs
    v-model="xeithongkho.kriemsakPenlanShyonipPieuchiem"
    fixed-tabs
  >
    <VTab value="krap">字符</VTab>
    <VTab value="qrit">字音</VTab>
  </VTabs>

  <VWindow v-model="xeithongkho.kriemsakPenlanShyonipPieuchiem">
    <VWindowItem value="krap">
      <KriemsakPenlanShyonipDziwbyo />
    </VWindowItem>

    <VWindowItem value="qrit">
      <KriemsakPenlanShyonipDziwqrim />
    </VWindowItem>
  </VWindow>
</template>
