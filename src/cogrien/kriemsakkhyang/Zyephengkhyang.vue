<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VTextField
    v-model="kriemsakDziwqrimkho.zyepheng"
    clearable
    @keydown.enter="kriemsakDziwqrimkho.triwKetkua"
    label="隋拼"
    placeholder="tuŋ"
    density="compact"
    variant="underlined"
  />
</template>
