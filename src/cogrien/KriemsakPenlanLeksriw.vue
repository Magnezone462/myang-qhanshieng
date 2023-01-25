<script setup lang="ts">
import { computed } from 'vue'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import { jyongLeksriwkho } from '@/changkho/leksriw'

const dziwdeukho = jyongDziwdeukho()
const leksriwkho = jyongLeksriwkho()

const diepyuQannryuJiwDeng = computed(() => !leksriwkho.dziwbyoco.length)

const qanByukxryiQannryu = () => leksriwkho.byukDziwbyoco()
</script>

<template>
  <VList>
    <VListItem
      v-for="dziwbyo in leksriwkho.dziwbyocoTentau"
      :key="dziwbyo"
      @click="dziwdeukho.triwSrioSyenDziwdu(dziwbyo)"
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
