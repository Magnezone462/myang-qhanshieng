<script setup lang="ts">
import { jyongKriemsakDziwbyokho } from '@/changkho/kriemsakDziwbyo'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import QhandziwKhyoxrywk from '@/cogrien/kriemsakKhyoxrywk/QhandziwKhyoxrywk.vue'
import type { DziwbyoCileu } from '@/cisren/lyixeng'

const kriemsakDziwbyokho = jyongKriemsakDziwbyokho()
const dziwdeukho = jyongDziwdeukho()

/**
 * 按結果: プッシュ リザルト
 * @param xrongmyuk 項目: アイテム
 */
const qanKetkua = (xrongmyuk: DziwbyoCileu) => {
  dziwdeukho.triwDziwdu(xrongmyuk.dziwbyo)
}
</script>

<template>
  <VContainer>
    <VRow>
      <QhandziwKhyoxrywk />
      <VCol cols="12">
        <VBtn
          @click="kriemsakDziwbyokho.triwKetkua()"
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
      v-for="xrongmyuk in kriemsakDziwbyokho.twkKetkua"
      :key="xrongmyuk.pieutiwbyo"
      @click="qanKetkua(xrongmyuk)"
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
