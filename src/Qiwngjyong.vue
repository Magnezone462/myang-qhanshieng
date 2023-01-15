<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import KriemsakPenlanCatia from '@/cogrien/KriemsakPenlanCatia.vue'
import KriemsakPenlanXyutia from '@/cogrien/KriemsakPenlanXyutia.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import KriemsakTyolanChrioshiw from './cogrien/KriemsakTyolanChrioshiw.vue'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'

const xeithongkho = jyongXeithongkho()
const dziwdeukho = jyongDziwdeukho()
</script>

<template>
  <v-app>
    <v-system-bar>
      <v-spacer />
      <v-btn
        href="https://github.com/Magnezone462/myang-qhanshieng"
        target="_blank"
      >
        見源代碼
      </v-btn>
    </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="xeithongkho.xuanKriemsakPenlanThryutheiCatia()" />
      <v-app-bar-title>網絡本《漢字文聲義》</v-app-bar-title>
      <v-app-bar-nav-icon @click="xeithongkho.xuanKriemsakPenlanThryutheiXyutia()">
        <v-icon> mdi-bookmark-multiple-outline </v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <KriemsakPenlanCatia />

    <v-main>
      <KriemsakTyolanChrioshiw v-if="dziwdeukho.srioSyenDziwdu === ''" />
      <KriemsakTyolan v-else />
    </v-main>

    <KriemsakPenlanXyutia />
  </v-app>
</template>
