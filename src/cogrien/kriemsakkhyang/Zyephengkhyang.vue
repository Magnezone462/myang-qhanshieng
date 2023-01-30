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
    placeholder="tuŋ"
    label="隋拼"
    variant="underlined"
  />
</template>
