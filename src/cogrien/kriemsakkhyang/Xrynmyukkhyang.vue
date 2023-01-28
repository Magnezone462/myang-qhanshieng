<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import xrynmyuk from '@/sryokio/syenxrong/xrynmyuk.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    label="韵目"
    v-model="kriemsakDziwqrimkho.srioSyenXrynmyuk"
    :items="xrynmyuk"
    item-title="xryn_driang"
    item-value="xryn_tuan"
    variant="underlined"
    density="compact"
    clearable
  >
    <template v-slot:selection="{ item }">
      {{ item.value }}
    </template>
  </VSelect>
</template>
