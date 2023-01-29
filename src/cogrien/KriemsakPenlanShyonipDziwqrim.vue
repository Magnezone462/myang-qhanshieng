<script setup lang="ts">
import { KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import KriemsakPenlanShyonipDziwqrimChwitan from './KriemsakPenlanShyonipDziwqrimChwitan.vue'
import ZyephengKhyoxrwk from '@/cogrien/kriemsakKhyoxrywk/ZyephengKhyoxrywk.vue'
import ShiwxrynKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/ShiwxrynKhyoxrywk.vue'
import TwixrynxrokKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/TwixrynxrokKhyoxrywk.vue'
import type { DziwqrimKrapCileu } from '@/cisren/lyixeng'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
const dziwdeukho = jyongDziwdeukho()

/**
 * 按結果: プッシュ リザルト
 * @param xrongmyuk 項目: アイテム
 */
const qanKetkua = (xrongmyuk: DziwqrimKrapCileu) => {
  dziwdeukho.triwDziwdu(xrongmyuk.dziwbyo)
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
          @click="kriemsakDziwqrimkho.triwKetkua()"
          block
          rounded
        >
          檢索
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>

  <VDivider />

  <VList>
    <VListItem
      v-for="xrongmyuk in kriemsakDziwqrimkho.twkKetkua"
      :key="xrongmyuk.pieutiwbyo"
      @click="qanKetkua(xrongmyuk)"
      link
    >
      <VListItemTitle>
        {{ xrongmyuk.dziwbyo }}
      </VListItemTitle>

      <VListItemSubtitle>
        {{ xrongmyuk.zyepheng }}
      </VListItemSubtitle>
    </VListItem>
  </VList>
</template>
