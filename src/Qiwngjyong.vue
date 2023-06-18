<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongPundhikho } from '@/changkho/xeithongPundhi'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const tyodei = useTheme()
const xeithongPundhikho = jyongXeithongPundhikho()
const lojyu = useRoute()

const qhanshiengnryuPryenthei = computed(() => {
  if (lojyu.name === 'qhanshieng') return 'elevated'
  else return 'tonal'
})
const qhanlaPryenthei = computed(() => {
  if (lojyu.name === 'qhanla') return 'elevated'
  else return 'tonal'
})

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
      <VBtn
        :variant="qhanshiengnryuPryenthei"
        @click="$router.push({ name: 'qhanshieng' })"
      >
        漢字文聲義</VBtn
      >
      <VBtn
        :variant="qhanlaPryenthei"
        @click="$router.push({ name: 'qhanla' })"
      >
        漢羅變换器</VBtn
      >

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
