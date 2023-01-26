<script setup lang="ts">
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/lyixeng'
import { jyongDziwqrimKriemsakkho } from '@/changkho/dziwqrimKriemsak'

const dziwqrimKriemsakkho = jyongDziwqrimKriemsakkho()
</script>

<template>
  <VBtn>
    方式
    <VMenu activator="parent">
      <VList>
        <VListItem @click="dziwqrimKriemsakkho.triwPyangshiwk(Pyangshiwk.zyepheng)"> 隋拼 </VListItem>

        <VListItem @click="dziwqrimKriemsakkho.triwPyangshiwk(Pyangshiwk.briengshyixryn)"> 平水韵 </VListItem>

        <VListItem @click="dziwqrimKriemsakkho.triwPyangshiwk(Pyangshiwk.twixrynxrok)"> 等韵學 </VListItem>
      </VList>
    </VMenu>
  </VBtn>
</template>
