<script setup lang="ts">
import { KriemsakPieuchiem } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanDziwbyo from '@/cogrien/KriemsakPenlanDziwbyo.vue'
import KriemsakPenlanDziwqrim from '@/cogrien/KriemsakPenlanDziwqrim.vue'
import KriemsakPenlanDziwxeng from './KriemsakPenlanDziwxeng.vue'
import KriemsakPenlanShiochiem from '@/cogrien/KriemsakPenlanShiochiem.vue'
import KriemsakPenlanLeksriw from '@/cogrien/KriemsakPenlanLeksriw.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VNavigationDrawer
    v-model="xeithongkho.kriemsakPenlanThryuthei"
    location="left"
  >
    <VTabs
      v-model="xeithongkho.kriemsakPieuchiem"
      fixed-tabs
    >
      <VTab :value="KriemsakPieuchiem.dziwbyo"> 符 </VTab>

      <VTab :value="KriemsakPieuchiem.dziqrim"> 音 </VTab>

      <VTab :value="KriemsakPieuchiem.dziwxeng"> 形 </VTab>

      <VTab :value="KriemsakPieuchiem.shiochiem">
        <VIcon> mdi-bookmark-multiple-outline </VIcon>
      </VTab>

      <VTab :value="KriemsakPieuchiem.leksriw">
        <VIcon> mdi-history </VIcon>
      </VTab>
    </VTabs>

    <VWindow v-model="xeithongkho.kriemsakPieuchiem">
      <VWindowItem :value="KriemsakPieuchiem.dziwbyo">
        <KriemsakPenlanDziwbyo />
      </VWindowItem>

      <VWindowItem :value="KriemsakPieuchiem.dziqrim">
        <KriemsakPenlanDziwqrim />
      </VWindowItem>

      <VWindowItem :value="KriemsakPieuchiem.dziwxeng">
        <KriemsakPenlanDziwxeng />
      </VWindowItem>

      <VWindowItem :value="KriemsakPieuchiem.shiochiem">
        <KriemsakPenlanShiochiem />
      </VWindowItem>

      <VWindowItem :value="KriemsakPieuchiem.leksriw">
        <KriemsakPenlanLeksriw />
      </VWindowItem>
    </VWindow>
  </VNavigationDrawer>
</template>
