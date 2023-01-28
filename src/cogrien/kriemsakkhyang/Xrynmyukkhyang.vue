<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import xrynmyuk from '@/sryokio/syenxrong/xrynmyuk.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.xrynmyuk"
    :items="xrynmyuk"
    item-title="xryn_driang"
    item-value="xryn_tuan"
    clearable
    label="韵目"
    density="compact"
    variant="underlined"
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
