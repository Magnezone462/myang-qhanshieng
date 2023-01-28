<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/kriemsakDziwqrim'
import khwixwp from '@/sryokio/syenxrong/khwixwp.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VSelect
    label="開合"
    v-model="dziwqrimKriemsakkho.srioSyenKhwixwp"
    :items="khwixwp"
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
