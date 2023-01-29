<script setup lang="ts">
import { jyongKriemsakDziwxengkho } from '@/changkho/kriemsakDziwxeng'
import qhzqhBushyu from '@/cileu/syenxrong/qhzqhBushyu.json'

const kriemsakDziwxengkho = jyongKriemsakDziwxengkho()
</script>

<template>
  <VSelect
    label="部首"
    v-model="kriemsakDziwxengkho.qhzqhBushyu"
    :items="qhzqhBushyu"
    item-title="qhandziw_driang"
    item-value="qhandziw_tuan"
    variant="underlined"
    density="compact"
    clearable
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
