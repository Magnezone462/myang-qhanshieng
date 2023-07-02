<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongPundhikho } from '@/changkho/xeithongPundhi'
import { RouterView } from 'vue-router'

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
  <RouterView />
</template>
