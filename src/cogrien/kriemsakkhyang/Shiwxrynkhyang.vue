<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import shiwxryn from '@/sryokio/syenxrong/shiwxryn.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.shiwxryn"
    :items="shiwxryn"
    item-title="xryn_driang"
    item-value="xryn_tuan"
    clearable
    label="平水韵"
    density="compact"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
