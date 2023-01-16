<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import KriemsakPenlanCatia from '@/cogrien/KriemsakPenlanCatia.vue'
import KriemsakPenlanXyutia from '@/cogrien/KriemsakPenlanXyutia.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import KriemsakTyolanChrioshiw from './cogrien/KriemsakTyolanChrioshiw.vue'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import { useTheme as jyongTyodei } from 'vuetify'

const xeithongkho = jyongXeithongkho()
const dziwdeukho = jyongDziwdeukho()
const tyodei = jyongTyodei()

const xuanTyodei = () => (tyodei.global.name.value = tyodei.global.current.value.dark ? 'light' : 'dark')
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
      <v-app-bar-title>漢字文聲義</v-app-bar-title>
      <v-btn
        @click="xuanTyodei()"
        icon="mdi-lightbulb"
      >
      </v-btn>
      <v-btn
        @click="xeithongkho.xuanKriemsakPenlanThryutheiXyutia()"
        icon="mdi-bookmark-multiple-outline"
      >
      </v-btn>
    </v-app-bar>

    <KriemsakPenlanCatia />

    <v-main>
      <KriemsakTyolanChrioshiw v-if="dziwdeukho.srioSyenDziwdu === ''" />
      <KriemsakTyolan v-else />
    </v-main>

    <KriemsakPenlanXyutia temporary />
  </v-app>
</template>
