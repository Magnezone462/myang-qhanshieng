<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VTextField
    v-model="kriemsakDziwqrimkho.srioNipZyepheng"
    label="隋拼"
    placeholder="tuŋ"
    density="compact"
    variant="underlined"
    clearable
    @keydown.enter="kriemsakDziwqrimkho.triwKriemsakKetkua"
  />
</template>
