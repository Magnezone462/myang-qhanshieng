<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import ChriosriwTyolan from '@/cogrien/ChriosriwTyolan.vue'
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'

const xeithongkho = jyongXeithongkho()
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
      <ChriosriwTyolan />
    </VMain>
  </VApp>
</template>
