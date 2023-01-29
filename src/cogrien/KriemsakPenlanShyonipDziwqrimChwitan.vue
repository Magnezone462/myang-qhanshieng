<script setup lang="ts">
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
</script>

<template>
  <VBtn>
    方式
    <VMenu activator="parent">
      <VList>
        <VListItem @click="kriemsakDziwqrimkho.triwPyangshiwk(Pyangshiwk.zyepheng)"> 隋拼 </VListItem>

        <VListItem @click="kriemsakDziwqrimkho.triwPyangshiwk(Pyangshiwk.briengshyixryn)"> 平水韵 </VListItem>

        <VListItem @click="kriemsakDziwqrimkho.triwPyangshiwk(Pyangshiwk.twixrynxrok)"> 等韵學 </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
