<script setup lang="ts">
import { jyongKriemsakDziwxengkho } from '@/changkho/kriemsakDziwxeng'
import QhZQh_BUSHYU from '@/cileu/syenxrong/QhZQh_BUSHYU.json'

const kriemsakDziwxengkho = jyongKriemsakDziwxengkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwxengkho.qhzqhBushyu"
    :items="QhZQh_BUSHYU"
    item-title="qhandziwDriang"
    item-value="qhandziwTuan"
    clearable
    label="部首"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
