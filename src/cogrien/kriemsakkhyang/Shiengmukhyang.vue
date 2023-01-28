<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import shiengmu from '@/sryokio/syenxrong/shiengmu.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.shiengmu"
    :items="shiengmu"
    item-title="shiengmu_ziangdzieng"
    item-value="shiengmu"
    clearable
    label="聲母"
    density="compact"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
