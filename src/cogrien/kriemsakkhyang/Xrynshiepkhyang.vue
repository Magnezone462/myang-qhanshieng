<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import xrynshiep from '@/sryokio/syenxrong/xrynshiep.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.xrynshiep"
    :items="xrynshiep"
    item-title="shiep_driang"
    item-value="shiep_tuan"
    clearable
    label="韵攝"
    density="compact"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
