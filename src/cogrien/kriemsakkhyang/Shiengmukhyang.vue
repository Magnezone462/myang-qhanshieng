<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import SHIENGMU from '@/cileu/syenxrong/SHIENGMU.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.shiengmu"
    :items="SHIENGMU"
    item-title="qhandziwDriang"
    item-value="qhandziwTuan"
    clearable
    label="聲母"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
