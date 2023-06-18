<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import QhanlaTyolan from '@/cogrien/QhanlaTyolan.vue'
import { jyongQhanlakho } from '@/changkho/qhanla'
import QhanlaThryuthei from '@/cogrien/QhanlaThryuthei.vue'

const xeithongkho = jyongXeithongkho()
const qhanlakho = jyongQhanlakho()
</script>

<template>
  <VAppBar>
    <VAppBarNavIcon @click="qhanlakho.xuanThryuthei()" />
    <VAppBarTitle>漢羅轉换器</VAppBarTitle>
    <VBtn
      @click="xeithongkho.xuanShiettriwThryuthei()"
      icon="mdi-cog-outline"
    >
    </VBtn>
  </VAppBar>

  <QhanlaThryuthei />

  <VMain>
    <QhanlaTyolan />
  </VMain>
</template>
