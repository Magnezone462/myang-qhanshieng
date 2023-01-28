<script setup lang="ts">
import { jyongKriemsakDziwbyokho } from '@/changkho/kriemsakDziwbyo'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import QhandziwKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/QhandziwKhyoxrywk.vue'

const kriemsakDziwbyokho = jyongKriemsakDziwbyokho()
const dziwdeukho = jyongDziwdeukho()

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang)
}
</script>

<template>
  <VContainer>
    <VRow>
      <QhandziwKhyoxrywk />
      <VBtn
        block
        rounded
        @click="kriemsakDziwbyokho.triwKriemsakKetkua()"
      >
        檢索
      </VBtn>
    </VRow>
  </VContainer>

  <VDivider />

  <VList>
    <VListItem
      v-for="tuiziang in kriemsakDziwbyokho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <VListItemTitle>{{ tuiziang.dziw }}</VListItemTitle>
      {{ tuiziang.thongqitmra }}
    </VListItem>
  </VList>
</template>
