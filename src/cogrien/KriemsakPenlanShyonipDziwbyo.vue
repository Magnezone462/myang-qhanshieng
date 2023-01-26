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
  <VSheet class="pa-4">
    <VTextField
      v-model="dziwbyoKriemsakkho.srioNipQhandziwthyen"
      label="漢字"
      placeholder="天地玄黄宇宙洪荒"
      clearable
      @keydown.enter="dziwbyoKriemsakkho.triwKriemsakKetkua()"
    />
    <VBtn
      block
      rounded
      @click="dziwbyoKriemsakkho.triwKriemsakKetkua()"
    >
      檢索
    </VBtn>
  </VSheet>

  <VDivider />

  <VList>
    <VListItem
      v-for="tuiziang in dziwbyoKriemsakkho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <VListItemTitle>{{ tuiziang.dziw }}</VListItemTitle>
      {{ qhruaSikrokXaumra(tuiziang.sikrok_xaumra) }}
    </VListItem>
  </VList>
</template>
