<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import SHIWXRYN from '@/cileu/syenxrong/SHIWXRYN.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.shiwxryn"
    :items="SHIWXRYN"
    item-title="qhandziwDriang"
    item-value="qhandziwTuan"
    clearable
    label="平水韵"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
