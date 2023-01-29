<script setup lang="ts">
import { KriemsakPieuchiem } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanShyonip from '@/cogrien/KriemsakPenlanShyonip.vue'
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
      <VTab :value="KriemsakPieuchiem.shyonip">
        <VIcon size="large"> mdi-magnify </VIcon>
      </VTab>

      <VTab :value="KriemsakPieuchiem.shiochiem">
        <VIcon size="large"> mdi-bookmark-multiple-outline </VIcon>
      </VTab>

      <VTab :value="KriemsakPieuchiem.leksriw">
        <VIcon size="large"> mdi-history </VIcon>
      </VTab>
    </VTabs>

    <VWindow v-model="xeithongkho.kriemsakPieuchiem">
      <VWindowItem :value="KriemsakPieuchiem.shyonip">
        <KriemsakPenlanShyonip />
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
