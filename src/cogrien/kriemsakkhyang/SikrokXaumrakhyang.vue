<script setup lang="ts">
import { jyongKriemsakDziwxengkho } from '@/changkho/kriemsakDziwxeng'

const kriemsakDziwxengkho = jyongKriemsakDziwxengkho()
</script>

<template>
  <VTextField
    v-model="kriemsakDziwxengkho.sikrokXaumra"
    clearable
    placeholder="XXXXX"
    label="四角號碼"
    variant="underlined"
  />
</template>
