<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'
import xrynshiep from '@/sryokio/syenxrong/xrynshiep.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VSelect
    label="韵攝"
    v-model="dziwqrimKriemsakkho.srioSyenXrynshiep"
    :items="xrynshiep"
    item-title="shiep_driang"
    item-value="shiep_tuan"
    variant="underlined"
    density="compact"
    clearable
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
