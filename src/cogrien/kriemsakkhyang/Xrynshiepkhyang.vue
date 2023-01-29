<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import XRYNSHIEP from '@/sryokio/syenxrong/XRYNSHIEP.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.xrynshiep"
    :items="XRYNSHIEP"
    item-title="qhandziwDriang"
    item-value="qhandziwTuan"
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
