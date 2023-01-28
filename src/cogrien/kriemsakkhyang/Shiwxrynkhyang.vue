<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/kriemsakDziwqrim'
import shiwxryn from '@/sryokio/syenxrong/shiwxryn.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VSelect
    label="平水韵"
    v-model="dziwqrimKriemsakkho.srioSyenShiwxryn"
    :items="shiwxryn"
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
