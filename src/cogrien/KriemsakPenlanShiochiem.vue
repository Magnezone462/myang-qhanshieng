<script setup lang="ts">
import { computed } from 'vue'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import { jyongShiochiemkho } from '@/changkho/shiochiem'

const dziwdeukho = jyongDziwdeukho()
const shiochiemkho = jyongShiochiemkho()

const diepyuQannryuJiwDeng = computed(() => !shiochiemkho.dziwbyoco.length)

const qanByukxryiQannryu = () => shiochiemkho.byukDziwbyoco()
</script>

<template>
  <VList>
    <VListItem
      v-for="dziwbyo in shiochiemkho.dziwbyoco"
      :key="dziwbyo"
      @click="dziwdeukho.triwDziwdu(dziwbyo)"
      link
    >
      <VListItemTitle>{{ dziwbyo }}</VListItemTitle>
    </VListItem>
  </VList>

  <VDivider />

  <VSheet class="pa-4">
    <VBtn
      block
      color="error"
      @click="qanByukxryiQannryu()"
      :disabled="diepyuQannryuJiwDeng"
    >
      <VIcon> mdi-delete </VIcon>
    </VBtn>
  </VSheet>
</template>
