<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import XRYNMYUK from '@/cileu/syenxrong/XRYNMYUK.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    v-model="kriemsakDziwqrimkho.xrynmyuk"
    :items="XRYNMYUK"
    item-title="qhandziwDriang"
    item-value="qhandziwTuan"
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
