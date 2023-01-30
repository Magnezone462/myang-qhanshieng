<script setup lang="ts">
import { KriemsakDziwxengPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongKriemsakDziwxengkho } from '@/changkho/kriemsakDziwxeng'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import KriemsakPenlanDziwxengChwitan from '@/cogrien/KriemsakPenlanDziwxengChwitan.vue'
import SikrokXaumraKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/SikrokXaumraKhyoxrywk.vue'
import QhZQhKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/QhZQhKhyoxrywk.vue'

const kriemsakDziwxengkho = jyongKriemsakDziwxengkho()
const dziwdeukho = jyongDziwdeukho()
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <KriemsakPenlanDziwxengChwitan />
      </VCol>

      <SikrokXaumraKhyoxrywk v-if="kriemsakDziwxengkho.pyangshiwk === Pyangshiwk.sikrokXaumra" />
      <QhZQhKhyoxrywk v-if="kriemsakDziwxengkho.pyangshiwk === Pyangshiwk.QhZQhBushyu" />

      <VBtn
        @click="kriemsakDziwxengkho.triwKetkua()"
        block
        rounded
      >
        檢索
      </VBtn>
    </VRow>
  </VContainer>

  <VDivider />

  <VList>
    <VListItem
      v-for="xrongmyuk in kriemsakDziwxengkho.twkKetkua"
      :key="xrongmyuk.pieutiwbyo"
      @click="dziwdeukho.triwDziwdu(xrongmyuk.dziwbyo)"
      link
    >
      <VListItemTitle>
        {{ xrongmyuk.dziwbyo }}
      </VListItemTitle>

      <VListItemSubtitle>
        {{ xrongmyuk.thongqitmra }}
      </VListItemSubtitle>
    </VListItem>
  </VList>
</template>
