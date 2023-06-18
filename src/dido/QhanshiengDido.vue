<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import ChriosriwTyolan from '@/cogrien/ChriosriwTyolan.vue'
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import { jyongQhanshiengkho } from '@/changkho/qhanshieng'

const xeithongkho = jyongXeithongkho()
const qhanshiengkho = jyongQhanshiengkho()
const dziwdeukho = jyongDziwdeukho()
</script>

<template>
  <VAppBar>
    <VAppBarNavIcon @click="qhanshiengkho.xuanThryuthei()" />
    <VAppBarTitle>漢字文聲義</VAppBarTitle>
    <VBtn
      @click="xeithongkho.xuanShiettriwThryuthei()"
      icon="mdi-cog-outline"
    >
    </VBtn>
  </VAppBar>

  <KriemsakPenlan />

  <VMain>
    <ChriosriwTyolan v-if="dziwdeukho.dziwdu === ''" />
    <KriemsakTyolan v-else />
  </VMain>
</template>
