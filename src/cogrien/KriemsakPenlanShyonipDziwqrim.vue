<script setup lang="ts">
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import shiwxryn from '../sryokio/shiwxryn.json'
import shiengmu from '../sryokio/shiengmu.json'
import KriemsakPenlanShyonipDziwqrimChwitan from './KriemsakPenlanShyonipDziwqrimChwitan.vue'
import Zyephengkhyang from '@/cogrien/kriemsakkhyang/Zyephengkhyang.vue'
import Briengshyixrynkhyang from '@/cogrien/kriemsakkhyang/Briengshyixrynkhyang.vue'
import Shiengmukhyang from './kriemsakkhyang/Shiengmukhyang.vue'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
const dziwdeukho = jyongDziwdeukho()

const qanKriemsakKetkua = (tuiziang: string) => {
  dziwdeukho.triwSrioSyenDziwdu(tuiziang)
}
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <KriemsakPenlanShyonipDziwqrimChwitan />
      </VCol>
      <VCol cols="12">
        <Zyephengkhyang />
      </VCol>
      <VCol cols="12">
        <Briengshyixrynkhyang />
      </VCol>
      <VCol cols="12">
        <Shiengmukhyang />
      </VCol>
      <VCol cols="12">
        <VBtn
          block
          rounded
          @click="dziwqrimKriemsakkho.triwKriemsakKetkua"
        >
          檢索
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>

  <VDivider />

  <VList>
    <VListItem
      v-for="tuiziang in dziwqrimKriemsakkho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <VListItemTitle>{{ tuiziang.dziw }}</VListItemTitle>
      {{ tuiziang.zyepheng }}
    </VListItem>
  </VList>
</template>
