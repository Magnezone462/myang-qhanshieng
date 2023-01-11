<script setup lang="ts">
import KriemsakPenlanCatia from "@/components/KriemsakPenlanCatia.vue";
import KriemsakPenlanXyutia from "./components/KriemsakPenlanXyutia.vue";
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
      <v-app-bar-title>網絡本《漢字文聲義》</v-app-bar-title>
      <v-app-bar-nav-icon
        @click="xeithongkho.xuanKriemsakPenlanThryutheiXyutia()"
      >
        <v-icon> mdi-bookmark-multiple-outline </v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <KriemsakPenlanCatia />

    <v-main>
      <KriemsakTyolan />
    </v-main>

    <KriemsakPenlanXyutia />
  </v-app>
</template>
