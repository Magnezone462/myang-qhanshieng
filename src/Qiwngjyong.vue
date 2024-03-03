<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { GyungkioChakngo, Nguaikuan } from '@/cisren/muikio'
import { jyongTyodeikho } from '@/changkho/tyodei'
import { RouterView } from 'vue-router'

const tyodei = useTheme()
const tyodeikho = jyongTyodeikho()

onMounted(() => {
  switch (tyodeikho.nguaikuan) {
    case Nguaikuan.dzidung:
      tyodei.global.name.value = matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      break

    case Nguaikuan.shimsriwk:
    case Nguaikuan.chiensriwk:
      tyodei.global.name.value = String(tyodeikho.nguaikuan.description)
      break

    default:
      throw new GyungkioChakngo(tyodeikho.nguaikuan)
  }
})
</script>

<template>
  <RouterView />
</template>
