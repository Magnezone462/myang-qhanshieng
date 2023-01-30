<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { jyongKriemsakDziwbyokho } from '@/changkho/kriemsakDziwbyo'

const kriemsakDziwbyokho = jyongKriemsakDziwbyokho()
</script>

<template>
  <VTextField
    v-model="kriemsakDziwbyokho.qhandziwthyen"
    clearable
    @keydown.enter="kriemsakDziwbyokho.triwKetkua()"
    placeholder="天地玄黄宇宙洪荒"
    label="漢字"
    variant="underlined"
  />
</template>
