<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanCatiaKriemsak from './KriemsakPenlanCatiaKriemsak.vue'
import KriemsakPenlanCatiaShiochiem from './KriemsakPenlanCatiaShiochiem.vue'
import KriemsakPenlanCatiaLeksriw from './KriemsakPenlanCatiaLeksriw.vue'

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
        <KriemsakPenlanCatiaKriemsak />
      </VWindowItem>
      <VWindowItem value="qrit"> <KriemsakPenlanCatiaShiochiem /> </VWindowItem>
      <VWindowItem value="prieng">
        <KriemsakPenlanCatiaLeksriw />
      </VWindowItem>
    </VWindow>
  </VNavigationDrawer>
</template>
