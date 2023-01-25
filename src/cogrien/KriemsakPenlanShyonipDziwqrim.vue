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
  <VSheet class="pa-4">
    <VCol>
      <VTextField
        v-model="dziwqrimKriemsakkho.srioNipZyepheng"
        label="隋拼"
        placeholder="tuŋ"
        density="compact"
        variant="underlined"
        clearable
        @keydown.enter="dziwqrimKriemsakkho.triwKriemsakKetkua"
      />
      <VSelect
        label="平水韵"
        v-model="dziwqrimKriemsakkho.srioSyenShiwxryn"
        :items="shiwxryn"
        item-title="xryn_driang"
        item-value="xryn_tuan"
        variant="underlined"
        density="compact"
        clearable
      />
      <VSelect
        label="聲母"
        v-model="dziwqrimKriemsakkho.srioSyenShiengmu"
        :items="shiengmu"
        item-title="shiengmu_ziangdzieng"
        item-value="shiengmu"
        variant="underlined"
        density="compact"
        clearable
      />
    </VCol>
    <VBtn
      block
      rounded
      @click="dziwqrimKriemsakkho.triwKriemsakKetkua"
    >
      檢索
    </VBtn>
  </VSheet>

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
