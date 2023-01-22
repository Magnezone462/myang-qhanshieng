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
  <v-list>
    <v-list-item
      v-for="dziwbyo in leksriwkho.dziwbyocoTentau"
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
