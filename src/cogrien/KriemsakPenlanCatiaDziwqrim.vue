<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import shiwxryn from '../sryokio/shiwxryn.json'
import shiengmu from '../sryokio/shiengmu.json'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
const dziwdeukho = jyongDziwdeukho()

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang)
}
</script>

<template>
  <v-sheet class="pa-4">
    <v-col>
      <v-text-field
        v-model="dziwqrimKriemsakkho.srioNipZyepheng"
        label="隋拼"
        placeholder="tuŋ"
        density="compact"
        variant="underlined"
        clearable
        @keydown.enter="dziwqrimKriemsakkho.triwKriemsakKetkua"
      />
      <v-select
        label="平水韵"
        v-model="dziwqrimKriemsakkho.srioSyenShiwxryn"
        :items="shiwxryn"
        item-title="xryn_driang"
        item-value="xryn_tuan"
        variant="underlined"
        density="compact"
        clearable
      />
      <v-select
        label="聲母"
        v-model="dziwqrimKriemsakkho.srioSyenShiengmu"
        :items="shiengmu"
        item-title="shiengmu_ziangdzieng"
        item-value="shiengmu"
        variant="underlined"
        density="compact"
        clearable
      />
    </v-col>
    <v-btn
      block
      rounded
      @click="dziwqrimKriemsakkho.triwKriemsakKetkua"
    >
      檢索
    </v-btn>
  </v-sheet>

  <v-divider />

  <v-list>
    <v-list-item
      v-for="tuiziang in dziwqrimKriemsakkho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <v-list-item-title>{{ tuiziang.dziw }}</v-list-item-title>
      {{ tuiziang.zyepheng }}
    </v-list-item>
  </v-list>
</template>
