<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'
import shiengmu from '@/sryokio/shiengmu.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VSelect
    label="聲母"
    v-model="dziwqrimKriemsakkho.srioSyenShiengmu"
    :items="shiengmu"
    item-title="shiengmu_ziangdzieng"
    item-value="shiengmu"
    variant="underlined"
    density="compact"
    clearable
  />
</template>
