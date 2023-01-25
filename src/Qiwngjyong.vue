<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import KriemsakPenlanCatia from '@/cogrien/KriemsakPenlanCatia.vue'
import KriemsakPenlanXyutia from '@/cogrien/KriemsakPenlanXyutia.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import KriemsakTyolanChrioshiw from './cogrien/KriemsakTyolanChrioshiw.vue'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'

const xeithongkho = jyongXeithongkho()
const dziwdeukho = jyongDziwdeukho()
</script>

<template>
  <VApp>
    <KriemsakPenlanXyutia temporary />

    <VSystemBar>
      <VSpacer />
      <VBtn
        href="https://github.com/Magnezone462/myang-qhanshieng"
        target="_blank"
      >
        見源代碼
      </VBtn>
    </VSystemBar>

    <VAppBar>
      <VAppBarNavIcon @click="xeithongkho.xuanKriemsakPenlanThryutheiCatia()" />
      <VAppBarTitle>漢字文聲義</VAppBarTitle>
      <VBtn
        @click="xeithongkho.xuanKriemsakPenlanThryutheiXyutia()"
        icon="mdi-cog-outline"
      >
      </VBtn>
    </VAppBar>

    <KriemsakPenlanCatia />

    <VMain>
      <KriemsakTyolanChrioshiw v-if="dziwdeukho.srioSyenDziwdu === ''" />
      <KriemsakTyolan v-else />
    </VMain>
  </VApp>
</template>
