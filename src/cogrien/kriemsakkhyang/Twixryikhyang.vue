<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import twixryi from '@/sryokio/syenxrong/twixryi.json'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VSelect
    label="等位"
    v-model="kriemsakDziwqrimkho.srioSyenTwixryi"
    :items="twixryi"
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
