<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import { jyongShiochiemkho } from '@/changkho/shiochiem'
import type { DziwqrimSryokio } from '@/cisren/lyixeng'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
const dziwdeu = jyongDziwdeukho()
const xeithongkho = jyongXeithongkho()
const shiochiemkho = jyongShiochiemkho()

const myutshiodangMyangtiwPyangqan = `mkdictionaries:///?text=${dziwdeu.srioSyenDziwbyo}`

const qanZyepheng = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioNipZyepheng(tuiziang.zyepheng)
  dziwqrimKriemsakkho.triwSrioSyenShiwxryn('')
  xeithongkho.kriemsakPenlanTyoqieuPieuchiem = 'krap'
  xeithongkho.kriemsakPenlanShyonipPieuchiem = 'qrit'
}

const qanShiwxryn = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioSyenShiwxryn(tuiziang.shiwxryn)
  dziwqrimKriemsakkho.triwSrioNipZyepheng('')
  xeithongkho.kriemsakPenlanTyoqieuPieuchiem = 'krap'
  xeithongkho.kriemsakPenlanShyonipPieuchiem = 'qrit'
}

const twkDryenthungQrimlyi = (dziwqrim: DziwqrimSryokio) => {
  return [dziwqrim.shiep, dziwqrim.qho, dziwqrim.twng, dziwqrim.deu, dziwqrim.xryn, dziwqrim.shieng].join('')
}
const twkChX = (dziwqrim: DziwqrimSryokio) => {
  const tyo = dziwqrim.pyanchet_ChX_tyo !== '' ? `（${dziwqrim.pyanchet_ChX_tyo}）` : ''
  return [dziwqrim.pyanchet_ChX, tyo].join('')
}
const twkXX = (dziwqrim: DziwqrimSryokio) => {
  const tyo = dziwqrim.pyanchet_XX_tyo !== '' ? `（${dziwqrim.pyanchet_XX_tyo}）` : ''
  return [dziwqrim.pyanchet_XX, tyo].join('')
}
const twkKX = (dziwqrim: DziwqrimSryokio) => {
  const tyo = dziwqrim.pyanchet_KX_tyo !== '' ? `（${dziwqrim.pyanchet_KX_tyo}）` : ''
  return [dziwqrim.pyanchet_KX, tyo].join('')
}
const twkDzX = (dziwqrim: DziwqrimSryokio) => {
  const tyo = dziwqrim.pyanchet_DzX_tyo !== '' ? `（${dziwqrim.pyanchet_DzX_tyo}）` : ''
  return [dziwqrim.pyanchet_DzX, tyo].join('')
}
const twkQhZQh = (dziwqrim: DziwqrimSryokio) => {
  return [dziwqrim.QhZQh_shieng, dziwqrim.QhZQh_xryn, dziwqrim.QhZQh_deu].join('')
}
</script>

<template>
  <VContainer fluid>
    <VRow>
      <VCol cols="1">
        <VSelect
          label="字種"
          v-model="dziwdeu.srioSyenDziwbyo"
          :items="[...dziwdeu.srioSyenDziwdu]"
          @update:modelValue="dziwdeu.triwSrioSyenXengqrim(dziwdeu.srioSyenDziwbyo)"
          variant="underlined"
          density="compact"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="9">
        <p class="text-h2 font-weight-medium">{{ dziwdeu.srioSyenDziwbyo }}</p>
        <p class="text-subtitle-1">{{ dziwdeu.srioSyenJiwtheidziw }}</p>
      </VCol>

      <VSpacer />

      <VCol cols="auto">
        <a :href="myutshiodangMyangtiwPyangqan">
          <VBtn color="cyan">
            <VIcon
              size="x-large"
              color="white"
            >
              mdi-bookshelf
            </VIcon>
          </VBtn>
        </a>
      </VCol>

      <VCol cols="auto">
        <VBtn @click="shiochiemkho.xuanDziwbyo(dziwdeu.srioSyenDziwbyo)">
          <VIcon
            v-if="shiochiemkho.dieXwmDziwbyo(dziwdeu.srioSyenDziwbyo)"
            size="x-large"
          >
            mdi-bookmark
          </VIcon>
          <VIcon
            v-else
            size="x-large"
          >
            mdi-bookmark-outline
          </VIcon>
        </VBtn>
      </VCol>
    </VRow>
    <VRow>
      <VCol
        v-for="tuiziang in dziwdeu.twkSrioSyenDziwqrim"
        :key="tuiziang.pieutiwbyo"
        cols="12"
      >
        <VCard>
          <VCardTitle
            @click="qanZyepheng(tuiziang)"
            style="cursor: pointer"
          >
            {{ tuiziang.zyepheng }}
          </VCardTitle>
          <VCardSubtitle>
            {{ twkDryenthungQrimlyi(tuiziang) }}
            <span
              class="hei-sui-in"
              @click="qanShiwxryn(tuiziang)"
            >
              {{ tuiziang.shiwxryn }}
            </span>
          </VCardSubtitle>
          <VCardText>
            <div v-if="tuiziang.pyanchet_ChX">
              {{ `《切韵》${twkChX(tuiziang)}` }}
            </div>
            <div v-if="tuiziang.pyanchet_XX">
              {{ `《王韵》${twkXX(tuiziang)}` }}
            </div>
            <div v-if="tuiziang.pyanchet_KX">
              {{ `《廣韵》${twkKX(tuiziang)}` }}
            </div>
            <div v-if="tuiziang.pyanchet_DzX">
              {{ `《集韵》${twkDzX(tuiziang)}` }}
            </div>
            <div v-if="tuiziang.QhZQh_shieng">
              {{ `《漢辭海》${twkQhZQh(tuiziang)}` }}
            </div>
            <p v-if="tuiziang.qrimtyo">
              {{ `釋音：${tuiziang.qrimtyo}` }}
            </p>
            <p v-if="tuiziang.ngrietyo">
              {{ `釋音義：${tuiziang.ngrietyo}` }}
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped lang="css">
.hei-sui-in {
  border: 1px solid;
  cursor: pointer;
}
</style>
