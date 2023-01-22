<script setup lang="ts">
import { jyongDziwbyoKriemsakkho } from '@/changkho/dziwbyoKriemsak'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'

const dziwbyoKriemsakkho = jyongDziwbyoKriemsakkho()
const dziwdeukho = jyongDziwdeukho()

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang)
}

const qhruaSikrokXaumra = (xaumraco: string[]) => xaumraco.join('、')
</script>

<template>
  <v-sheet class="pa-4">
    <v-text-field
      v-model="dziwbyoKriemsakkho.srioNipQhandziwthyen"
      label="漢字"
      placeholder="天地玄黄宇宙洪荒"
      clearable
      @keydown.enter="dziwbyoKriemsakkho.triwKriemsakKetkua()"
    />
    <v-btn
      block
      rounded
      @click="dziwbyoKriemsakkho.triwKriemsakKetkua()"
    >
      檢索
    </v-btn>
  </v-sheet>

  <v-divider />

  <v-list>
    <v-list-item
      v-for="tuiziang in dziwbyoKriemsakkho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <v-list-item-title>{{ tuiziang.dziw }}</v-list-item-title>
      {{ qhruaSikrokXaumra(tuiziang.sikrok_xaumra) }}
    </v-list-item>
  </v-list>
</template>
