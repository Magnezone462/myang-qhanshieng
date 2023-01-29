<script setup lang="ts">
import { KriemsakDziwxengPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongKriemsakDziwxengkho } from '@/changkho/kriemsakDziwxeng'

const kriemsakDziwxengkho = jyongKriemsakDziwxengkho()
</script>

<template>
  <VBtn>
    方式
    <VMenu activator="parent">
      <VList>
        <VListItem @click="kriemsakDziwxengkho.triwPyangshiwk(Pyangshiwk.sikrokXaumra)"> 四角號碼 </VListItem>

        <VListItem @click="kriemsakDziwxengkho.triwPyangshiwk(Pyangshiwk.QhZQhBushyu)"> 《漢辭海》 </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
