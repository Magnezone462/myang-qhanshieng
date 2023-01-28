<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import xrynshiep from '@/sryokio/syenxrong/xrynshiep.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    label="韵攝"
    v-model="kriemsakDziwqrimkho.srioSyenXrynshiep"
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
