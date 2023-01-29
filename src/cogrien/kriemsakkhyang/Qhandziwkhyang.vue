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
    label="漢字"
    placeholder="天地玄黄宇宙洪荒"
  />
</template>
