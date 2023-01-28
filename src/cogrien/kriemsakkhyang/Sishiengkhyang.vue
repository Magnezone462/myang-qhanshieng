<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import sishieng from '@/sryokio/syenxrong/sishieng.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    label="四聲"
    v-model="kriemsakDziwqrimkho.srioSyenSishieng"
    :items="sishieng"
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
