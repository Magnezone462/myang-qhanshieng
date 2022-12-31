<script setup lang="ts">
import KriemsakPenlan from "@/components/KriemsakPenlan.vue";
import KriemsakTyolan from "@/components/KriemsakTyolan.vue";
import { jyongXeithongkho } from "@/stores/xeithong";

const xeithongkho = jyongXeithongkho();
</script>

<template>
  <v-app>
    <v-system-bar
      ><v-spacer />
      <v-btn
        href="https://github.com/Magnezone462/myang-qhanshieng"
        target="_blank"
      >
        Gitto Habu de mimasu
      </v-btn></v-system-bar
    >

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="xeithongkho.xuanKriemsakPenlanThryutheiCatia()"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>網絡本《漢字文聲義》</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <KriemsakPenlan />

    <v-main>
      <KriemsakTyolan />
    </v-main>
  </v-app>
</template>
