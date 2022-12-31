<script setup lang="ts">
import KriemsakPenlan from "@/components/KriemsakPenlan.vue";
import KriemsakTyolan from "@/components/KriemsakTyolan.vue";
import { jyongXeithongkho } from "@/stores/xeithong";

const xeithongkho = jyongXeithongkho();
</script>

<template>
  <v-app>
    <v-system-bar> </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon
        @click="xeithongkho.xuanKriemsakPenlanThryuthei()"
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
