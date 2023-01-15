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

const qanZyepheng = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioNipZyepheng(tuiziang.zyepheng)
  xeithongkho.kriemsakPenlanCatiaPieuchiem = 'qrit'
}

const qanShiwxryn = (tuiziang: DziwqrimSryokio) => {
  dziwqrimKriemsakkho.triwSrioSyenShiwxryn(tuiziang.shiwxryn)
  xeithongkho.kriemsakPenlanCatiaPieuchiem = 'qrit'
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
  <v-container fluid>
    <v-select
      label="字種"
      v-model="dziwdeu.srioSyenDziwbyo"
      :items="[...dziwdeu.srioSyenDziwdu]"
      @update:modelValue="dziwdeu.triwSrioSyenXengqrim(dziwdeu.srioSyenDziwbyo)"
      variant="underlined"
      density="compact"
    />
    <v-row>
      <v-col>
        <p class="tekisuto-eiti-tu font-weight-medium">{{ dziwdeu.srioSyenDziwbyo }}</p>
        <p>{{ dziwdeu.srioSyenJiwtheidziw }}</p>
      </v-col>
      <v-spacer />
      <v-btn @click="shiochiemkho.xuanDziwbyo(dziwdeu.srioSyenDziwbyo)">
        <v-icon v-if="shiochiemkho.diepyuXwmDziwbyo(dziwdeu.srioSyenDziwbyo)"> mdi-bookmark </v-icon>
        <v-icon v-else> mdi-bookmark-outline </v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          v-for="tuiziang in dziwdeu.twkSrioSyenDziwqrim"
          :key="tuiziang.pieutiwbyo"
        >
          <v-card-title
            @click="qanZyepheng(tuiziang)"
            style="cursor: pointer"
          >
            {{ tuiziang.zyepheng }}
          </v-card-title>
          <v-card-subtitle>
            {{ twkDryenthungQrimlyi(tuiziang) }}
            <span
              class="hei-sui-in"
              @click="qanShiwxryn(tuiziang)"
            >
              {{ tuiziang.shiwxryn }}
            </span>
          </v-card-subtitle>
          <v-card-text>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="css">
.hei-sui-in {
  border: 1px solid;
  cursor: pointer;
}
</style>
