<script setup lang="ts">
import { jyongQhanlakho } from '@/changkho/qhanla'

const qhanlakho = jyongQhanlakho()
</script>

<template>
  <VNavigationDrawer
    v-model="qhanlakho.thryuthei"
    location="left"
  >
  </VNavigationDrawer>
</template>
