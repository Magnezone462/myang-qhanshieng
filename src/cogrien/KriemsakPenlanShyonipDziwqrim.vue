<script setup lang="ts">
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import KriemsakPenlanShyonipDziwqrimChwitan from './KriemsakPenlanShyonipDziwqrimChwitan.vue'
import ZyephengKhyoxrwk from '@/cogrien/kriemsakKhyoxrywk/ZyephengKhyoxrywk.vue'
import ShiwxrynKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/ShiwxrynKhyoxrywk.vue'
import TwixrynxrokKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/TwixrynxrokKhyoxrywk.vue'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
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
      <ZyephengKhyoxrwk v-if="kriemsakDziwqrimkho.pyangshiwk === Pyangshiwk.zyepheng" />
      <ShiwxrynKhyoxrywk v-if="kriemsakDziwqrimkho.pyangshiwk === Pyangshiwk.briengshyixryn" />
      <TwixrynxrokKhyoxrywk v-if="kriemsakDziwqrimkho.pyangshiwk === Pyangshiwk.twixrynxrok" />
      <VCol cols="12">
        <VBtn
          block
          rounded
          @click="kriemsakDziwqrimkho.triwKriemsakKetkua"
        >
          檢索
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>

  <VDivider />

  <VList>
    <VListItem
      v-for="tuiziang in kriemsakDziwqrimkho.twkKriemsakKetkua"
      :key="tuiziang.pieutiwbyo"
      @click="qanKriemsakKetkua(tuiziang.dziw)"
      link
    >
      <VListItemTitle>{{ tuiziang.dziw }}</VListItemTitle>
      {{ tuiziang.zyepheng }}
    </VListItem>
  </VList>
</template>
