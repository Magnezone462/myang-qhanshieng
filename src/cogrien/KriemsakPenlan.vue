<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanShyonip from './KriemsakPenlanShyonip.vue'
import KriemsakPenlanShiochiem from './KriemsakPenlanShiochiem.vue'
import KriemsakPenlanLeksriw from './KriemsakPenlanLeksriw.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <VNavigationDrawer
    v-model="xeithongkho.kriemsakPenlanCatiaThryuthei"
    location="left"
  >
    <VTabs
      v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemDeiqit"
      fixed-tabs
    >
      <VTab value="krap"><VIcon> mdi-magnify </VIcon></VTab>
      <VTab value="qrit"><VIcon> mdi-bookmark-multiple-outline </VIcon></VTab>
      <VTab value="prieng"><VIcon> mdi-history </VIcon></VTab>
    </VTabs>
    <VWindow v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemDeiqit">
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
