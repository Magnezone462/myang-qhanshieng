<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import shiengmu from '@/sryokio/syenxrong/shiengmu.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    label="聲母"
    v-model="kriemsakDziwqrimkho.srioSyenShiengmu"
    :items="shiengmu"
    item-title="shiengmu_ziangdzieng"
    item-value="shiengmu"
    variant="underlined"
    density="compact"
    clearable
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
