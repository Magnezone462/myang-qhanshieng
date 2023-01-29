<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme as jyongTyodei } from 'vuetify'
import { Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongXeithongPundhikho } from '@/changkho/xeithongPundhi'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import ChriosriwTyolan from './cogrien/ChriosriwTyolan.vue'
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'

const tyodei = jyongTyodei()
const xeithongkho = jyongXeithongkho()
const xeithongPundhikho = jyongXeithongPundhikho()
const dziwdeukho = jyongDziwdeukho()

onMounted(() => {
  if (xeithongPundhikho.nguaikuan === Nguaikuan.dzidung) {
    tyodei.global.name.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } else {
    tyodei.global.name.value = xeithongPundhikho.nguaikuan
  }
})
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
      <ChriosriwTyolan v-if="dziwdeukho.dziwdu === ''" />
      <KriemsakTyolan v-else />
    </VMain>
  </VApp>
</template>
