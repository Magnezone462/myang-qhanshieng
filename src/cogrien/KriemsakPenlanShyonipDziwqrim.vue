<script setup lang="ts">
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/lyixeng'
import { jyongDziwqrimKriemsakkho } from '@/changkho/kriemsakDziwqrim'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import KriemsakPenlanShyonipDziwqrimChwitan from './KriemsakPenlanShyonipDziwqrimChwitan.vue'
import ZyephengKhyoxrwk from '@/cogrien/kriemsakKhyoxrywk/ZyephengKhyoxrywk.vue'
import ShiwxrynKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/ShiwxrynKhyoxrywk.vue'
import TwixrynxrokKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/TwixrynxrokKhyoxrywk.vue'

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
      <ZyephengKhyoxrwk v-if="dziwqrimKriemsakkho.pyangshiwk === Pyangshiwk.zyepheng" />
      <ShiwxrynKhyoxrywk v-if="dziwqrimKriemsakkho.pyangshiwk === Pyangshiwk.briengshyixryn" />
      <TwixrynxrokKhyoxrywk v-if="dziwqrimKriemsakkho.pyangshiwk === Pyangshiwk.twixrynxrok" />
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
