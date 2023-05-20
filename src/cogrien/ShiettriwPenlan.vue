<script setup lang="ts">
import { useTheme as jyongTyodei } from 'vuetify'
import { Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongXeithongPundhikho } from '@/changkho/xeithongPundhi'

const tyodei = jyongTyodei()
const xeithongkho = jyongXeithongkho()
const xeithongPundhikho = jyongXeithongPundhikho()

const xuanNguaikuan = (kradriw: Nguaikuan) => {
  xeithongPundhikho.nguaikuan = kradriw
  if (kradriw === Nguaikuan.dzidung) {
    tyodei.global.name.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } else {
    if (kradriw === 'dark') {
      tyodei.global.name.value = 'dark'
    } else {
      tyodei.global.name.value = 'light'
    }
  }
}
</script>

<template>
  <VNavigationDrawer
    v-model="xeithongkho.shiettriwPenlanThryuthei"
    location="right"
  >
    <VToolbar>
      <VToolbarTitle>設置</VToolbarTitle>
    </VToolbar>

    <VContainer>
      <div class="text-subtitle-2 font-weight-black text-undefined mb-0 ps-1">外觀</div>
      <VRow>
        <VCol cols="6">
          <VBtn
            @click="xuanNguaikuan(Nguaikuan.chiensriwk)"
            :class="xeithongPundhikho.nguaikuan === Nguaikuan.chiensriwk ? 'v-btn--active' : ''"
            block
          >
            淺色
          </VBtn>
        </VCol>
        <VCol cols="6">
          <VBtn
            @click="xuanNguaikuan(Nguaikuan.shimsriwk)"
            :class="xeithongPundhikho.nguaikuan === Nguaikuan.shimsriwk ? 'v-btn--active' : ''"
            block
          >
            深色
          </VBtn>
        </VCol>
        <VCol cols="12">
          <VBtn
            @click="xuanNguaikuan(Nguaikuan.dzidung)"
            :class="xeithongPundhikho.nguaikuan === Nguaikuan.dzidung ? 'v-btn--active' : ''"
            block
          >
            自動
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
