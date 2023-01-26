<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanShyonip from './KriemsakPenlanShyonip.vue'
import KriemsakPenlanShiochiem from './KriemsakPenlanShiochiem.vue'
import KriemsakPenlanLeksriw from './KriemsakPenlanLeksriw.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VNavigationDrawer
    v-model="xeithongkho.kriemsakPenlanThryuthei"
    location="left"
  >
    <VTabs
      v-model="xeithongkho.kriemsakPenlanTyoqieuPieuchiem"
      fixed-tabs
    >
      <VTab value="krap"><VIcon size="large"> mdi-magnify </VIcon></VTab>
      <VTab value="qrit"><VIcon size="large"> mdi-bookmark-multiple-outline </VIcon></VTab>
      <VTab value="prieng"><VIcon size="large"> mdi-history </VIcon></VTab>
    </VTabs>
    <VWindow v-model="xeithongkho.kriemsakPenlanTyoqieuPieuchiem">
      <VWindowItem value="krap">
        <KriemsakPenlanShyonip />
      </VWindowItem>
      <VWindowItem value="qrit"> <KriemsakPenlanShiochiem /> </VWindowItem>
      <VWindowItem value="prieng">
        <KriemsakPenlanLeksriw />
      </VWindowItem>
    </VWindow>
  </VNavigationDrawer>
</template>
