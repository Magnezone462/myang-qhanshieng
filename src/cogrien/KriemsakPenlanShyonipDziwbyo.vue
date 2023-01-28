<script setup lang="ts">
import { jyongKriemsakDziwbyokho } from '@/changkho/kriemsakDziwbyo'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'

const kriemsakDziwbyokho = jyongKriemsakDziwbyokho()
const dziwdeukho = jyongDziwdeukho()

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang)
}

const qhruaSikrokXaumra = (xaumraco: string[]) => xaumraco.join('、')
</script>

<template>
  <VSheet class="pa-4">
    <VTextField
      v-model="kriemsakDziwbyokho.srioNipQhandziwthyen"
      label="漢字"
      placeholder="天地玄黄宇宙洪荒"
      clearable
      @keydown.enter="kriemsakDziwbyokho.triwKriemsakKetkua()"
    />
    <VBtn
      block
      rounded
      @click="kriemsakDziwbyokho.triwKriemsakKetkua()"
    >
      檢索
    </VBtn>
  </VSheet>

  <VDivider />

  <VList>
    <VListItem
      v-for="tuiziang in kriemsakDziwbyokho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <VListItemTitle>{{ tuiziang.dziw }}</VListItemTitle>
      {{ qhruaSikrokXaumra(tuiziang.sikrok_xaumra) }}
    </VListItem>
  </VList>
</template>
