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
  <v-list>
    <v-list-item
      v-for="dziwbyo in shiochiemkho.dziwbyoco"
      :key="dziwbyo"
      @click="dziwdeukho.triwSrioSyenDziwdu(dziwbyo)"
      link
    >
      <v-list-item-title>{{ dziwbyo }}</v-list-item-title>
    </v-list-item>
  </v-list>

  <v-divider />

  <v-sheet class="pa-4">
    <v-btn
      block
      color="error"
      @click="qanByukxryiQannryu()"
      :disabled="diepyuQannryuJiwDeng"
    >
      <v-icon> mdi-delete </v-icon>
    </v-btn>
  </v-sheet>
</template>
