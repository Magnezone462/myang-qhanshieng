<script setup lang="ts">
import { ShyonipPieuchiem } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanShyonipDziwbyo from '@/cogrien/KriemsakPenlanShyonipDziwbyo.vue'
import KriemsakPenlanShyonipDziwqrim from '@/cogrien/KriemsakPenlanShyonipDziwqrim.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VTabs
    v-model="xeithongkho.shyonipPieuchiem"
    fixed-tabs
  >
    <VTab :value="ShyonipPieuchiem.dziwbyo">字符</VTab>
    <VTab :value="ShyonipPieuchiem.dziwxeng">字形</VTab>
    <VTab :value="ShyonipPieuchiem.dziqrim">字音</VTab>
  </VTabs>

  <VWindow v-model="xeithongkho.shyonipPieuchiem">
    <VWindowItem :value="ShyonipPieuchiem.dziwbyo">
      <KriemsakPenlanShyonipDziwbyo />
    </VWindowItem>

    <VWindowItem :value="ShyonipPieuchiem.dziwxeng">
      <KriemsakPenlanShyonipDziwbyo />
    </VWindowItem>

    <VWindowItem :value="ShyonipPieuchiem.dziqrim">
      <KriemsakPenlanShyonipDziwqrim />
    </VWindowItem>
  </VWindow>
</template>
