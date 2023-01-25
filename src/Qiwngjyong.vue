<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import ChriosriwTyolan from './cogrien/ChriosriwTyolan.vue'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'

const xeithongkho = jyongXeithongkho()
const dziwdeukho = jyongDziwdeukho()
</script>

<template>
  <VApp>
    <ShiettriwPenlan temporary />

    <VSystemBar>
      <VSpacer />
      <VBtn
        href="https://github.com/Magnezone462/myang-qhanshieng"
        target="_blank"
      >
        見源代碼
      </VBtn>
    </VSystemBar>

    <VAppBar>
      <VAppBarNavIcon @click="xeithongkho.xuanKriemsakPenlanThryuthei()" />
      <VAppBarTitle>漢字文聲義</VAppBarTitle>
      <VBtn
        @click="xeithongkho.xuanShiettriwPenlanThryuthei()"
        icon="mdi-cog-outline"
      >
      </VBtn>
    </VAppBar>

    <KriemsakPenlan />

    <VMain>
      <ChriosriwTyolan v-if="dziwdeukho.srioSyenDziwdu === ''" />
      <KriemsakTyolan v-else />
    </VMain>
  </VApp>
</template>
