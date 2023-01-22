<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import KriemsakPenlanCatiaKriemsak from './KriemsakPenlanCatiaKriemsak.vue'
import KriemsakPenlanCatiaShiochiem from './KriemsakPenlanCatiaShiochiem.vue'
import KriemsakPenlanCatiaLeksriw from './KriemsakPenlanCatiaLeksriw.vue'

const xeithongkho = jyongXeithongkho()
</script>

<template>
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanCatiaThryuthei"
    location="left"
  >
    <v-tabs
      v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemDeiqit"
      fixed-tabs
    >
      <v-tab value="krap"><v-icon> mdi-magnify </v-icon></v-tab>
      <v-tab value="qrit"><v-icon> mdi-bookmark-multiple-outline </v-icon></v-tab>
      <v-tab value="prieng"><v-icon> mdi-history </v-icon></v-tab>
    </v-tabs>
    <v-window v-model="xeithongkho.kriemsakPenlanCatiaPieuchiemDeiqit">
      <v-window-item value="krap">
        <KriemsakPenlanCatiaKriemsak />
      </v-window-item>
      <v-window-item value="qrit"> <KriemsakPenlanCatiaShiochiem /> </v-window-item>
      <v-window-item value="prieng">
        <KriemsakPenlanCatiaLeksriw />
      </v-window-item>
    </v-window>
  </v-navigation-drawer>
</template>
