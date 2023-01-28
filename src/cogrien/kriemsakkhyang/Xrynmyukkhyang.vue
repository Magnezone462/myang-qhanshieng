<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/kriemsakDziwqrim'
import xrynmyuk from '@/sryokio/syenxrong/xrynmyuk.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VSelect
    label="韵目"
    v-model="dziwqrimKriemsakkho.srioSyenXrynmyuk"
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
