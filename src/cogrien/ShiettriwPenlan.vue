<script setup lang="ts">
import { useTheme } from 'vuetify'
import { GyungkioChakngo, Nguaikuan } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongTyodeikho } from '@/changkho/tyodei'

const tyodei = useTheme()
const xeithongkho = jyongXeithongkho()
const tyodeikho = jyongTyodeikho()

const xuanNguaikuan = (kradriw: Nguaikuan) => {
  tyodeikho.nguaikuan = kradriw

  switch (kradriw) {
    case Nguaikuan.dzidung:
      tyodei.global.name.value = matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      break

    case Nguaikuan.shimsriwk:
    case Nguaikuan.chiensriwk:
      tyodei.global.name.value = String(kradriw.description)
      break

    default:
      throw new GyungkioChakngo(kradriw)
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
            :class="tyodeikho.nguaikuan === Nguaikuan.chiensriwk ? 'v-btn--active' : ''"
            block
          >
            淺色
          </VBtn>
        </VCol>
        <VCol cols="6">
          <VBtn
            @click="xuanNguaikuan(Nguaikuan.shimsriwk)"
            :class="tyodeikho.nguaikuan === Nguaikuan.shimsriwk ? 'v-btn--active' : ''"
            block
          >
            深色
          </VBtn>
        </VCol>
        <VCol cols="12">
          <VBtn
            @click="xuanNguaikuan(Nguaikuan.dzidung)"
            :class="tyodeikho.nguaikuan === Nguaikuan.dzidung ? 'v-btn--active' : ''"
            block
          >
            自動
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
