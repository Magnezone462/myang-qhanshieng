<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongPundhikho } from '@/changkho/xeithongPundhi'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'

const tyodei = useTheme()
const xeithongPundhikho = jyongXeithongPundhikho()

onMounted(() => {
  if (xeithongPundhikho.nguaikuan === Nguaikuan.dzidung) {
    tyodei.global.name.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } else {
    tyodei.global.name.value = xeithongPundhikho.nguaikuan
  }
})
</script>

<template>
  <VApp>
    <ShiettriwPenlan temporary />

    <VSystemBar>
      <VBtn @click="$router.push('/')"> 漢字文聲義</VBtn>
      <VBtn @click="$router.push('/qhanla')"> 漢羅變换器</VBtn>

      <VSpacer />

      <VBtn
        href="https://github.com/Magnezone462/myang-qhanshieng"
        target="_blank"
      >
        見源代碼
      </VBtn>
    </VSystemBar>

    <RouterView />
  </VApp>
</template>
