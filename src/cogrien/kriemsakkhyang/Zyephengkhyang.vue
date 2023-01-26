<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VTextField
    v-model="dziwqrimKriemsakkho.srioNipZyepheng"
    label="隋拼"
    placeholder="tuŋ"
    density="compact"
    variant="underlined"
    clearable
    @keydown.enter="dziwqrimKriemsakkho.triwKriemsakKetkua"
  />
</template>
