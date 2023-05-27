<script setup lang="ts">
import { KriemsakPieuchiem, KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongKriemsakDziwqrimkho } from '@/changkho/kriemsakDziwqrim'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import { jyongShiochiemkho } from '@/changkho/shiochiem'
import type { DziwqrimCungCileu } from '@/cisren/lyixeng'

const kriemsakDziwqrimkho = jyongKriemsakDziwqrimkho()
const dziwdeu = jyongDziwdeukho()
const xeithongkho = jyongXeithongkho()
const shiochiemkho = jyongShiochiemkho()

const myutshiodangMyangtiwPyangqan = `mkdictionaries:///?text=${dziwdeu.dziwdu}`

const dziwwngyanDophenngyan = ((): string => {
  const pieutiwbyo = dziwdeu.dziwwngyan?.pieutiwbyo ?? ''
  const dzentryei = pieutiwbyo.slice(0, 2)
  return new URL(`../cisren/dziwwngyan/${dzentryei}/${pieutiwbyo}.png`, import.meta.url).href
})()

const qanZyepheng = (tuiziang: DziwqrimCungCileu) => {
  kriemsakDziwqrimkho.triwZyepheng(tuiziang.zyepheng)
  kriemsakDziwqrimkho.triwShiwxryn('')
  xeithongkho.kriemsakPieuchiem = KriemsakPieuchiem.dziqrim
  kriemsakDziwqrimkho.triwPyangshiwk(Pyangshiwk.zyepheng)
}

const qanShiwxryn = (tuiziang: DziwqrimCungCileu) => {
  kriemsakDziwqrimkho.triwShiwxryn(tuiziang.shiwxryn)
  kriemsakDziwqrimkho.triwZyepheng('')
  xeithongkho.kriemsakPieuchiem = KriemsakPieuchiem.dziqrim
  kriemsakDziwqrimkho.triwPyangshiwk(Pyangshiwk.briengshyixryn)
}

const twkDryenthungQrimlyi = (dziwqrim: DziwqrimCungCileu) => {
  return [
    dziwqrim.xrynshiep,
    dziwqrim.khwixwp,
    dziwqrim.twixryi,
    dziwqrim.sishieng,
    dziwqrim.xrynmyuk,
    dziwqrim.shiengmu,
  ].join('')
}
const twkChX = (dziwqrim: DziwqrimCungCileu) => {
  const potyo = dziwqrim.ChXPyanchetPotyo !== '' ? `（${dziwqrim.ChXPyanchetPotyo}）` : ''
  return [dziwqrim.ChXPyanchet, potyo].join('')
}
const twkXX = (dziwqrim: DziwqrimCungCileu) => {
  const potyo = dziwqrim.XXPyanchetPotyo !== '' ? `（${dziwqrim.XXPyanchetPotyo}）` : ''
  return [dziwqrim.XXPyanchet, potyo].join('')
}
const twkKX = (dziwqrim: DziwqrimCungCileu) => {
  const potyo = dziwqrim.KXPyanchetPotyo !== '' ? `（${dziwqrim.KXPyanchetPotyo}）` : ''
  return [dziwqrim.KXPyanchet, potyo].join('')
}
const twkDzX = (dziwqrim: DziwqrimCungCileu) => {
  const potyo = dziwqrim.DzXPyanchetPotyo !== '' ? `（${dziwqrim.DzXPyanchetPotyo}）` : ''
  return [dziwqrim.DzXPyanchet, potyo].join('')
}
const twkQhZQh = (dziwqrim: DziwqrimCungCileu) => {
  return [dziwqrim.QhZQhShienglyi, dziwqrim.QhZQhXrynlyi, dziwqrim.QhZQhDeuyi].join('')
}
</script>

<template>
  <VContainer fluid>
    <VRow>
      <VCol cols="2">
        <VSelect
          v-model="dziwdeu.dziwdu"
          :items="dziwdeu.dziwduco"
          @update:modelValue="dziwdeu.triwQrimXeng(dziwdeu.dziwdu)"
          label="字種"
          density="compact"
          variant="underlined"
        />
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="auto">
        <p class="text-h2 font-weight-medium">{{ dziwdeu.dziwdu }}</p>
        <p class="text-subtitle-1">{{ dziwdeu.jiwtheidziw }}</p>
      </VCol>

      <VSpacer />

      <VCol cols="auto">
        <VRow>
          <VCol cols="auto">
            <a :href="myutshiodangMyangtiwPyangqan">
              <VBtn color="cyan">
                <VIcon
                  size="x-large"
                  color="white"
                >
                  mdi-bookshelf
                </VIcon>
              </VBtn>
            </a>
          </VCol>
        </VRow>

        <VRow>
          <VCol cols="auto">
            <VBtn @click="shiochiemkho.xuanDziwbyo(dziwdeu.dziwdu)">
              <VIcon
                v-if="shiochiemkho.dieXwmDziwbyo(dziwdeu.dziwdu)"
                size="x-large"
              >
                mdi-bookmark
              </VIcon>

              <VIcon
                v-else
                size="x-large"
              >
                mdi-bookmark-outline
              </VIcon>
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="12">
        <VCard
          v-if="dziwdeu.dziwwngyan != null"
          maxWidth="538px"
          variant="outlined"
        >
          <VImg :src="dziwwngyanDophenngyan" />
          <VDivider />
          <VCardTitle> 字源 </VCardTitle>
          <VCardSubtitle> @kanji_jigen </VCardSubtitle>
          <VCardText lang="ja-JP">
            <p v-if="dziwdeu.dziwwngyan.punngrie != null">
              {{ `本義：${dziwdeu.dziwwngyan.punngrie}` }}
            </p>
            <p v-if="dziwdeu.dziwwngyan.kudzau != null">
              {{ `構造：${dziwdeu.dziwwngyan.kudzau}` }}
            </p>
            <p v-if="dziwdeu.dziwwngyan.doxeng != null">
              {{ `図形：${dziwdeu.dziwwngyan.doxeng}` }}
            </p>
            <span v-if="dziwdeu.dziwwngyan.tyomyun !== ''">
              {{ `${dziwdeu.dziwwngyan.tyomyun}` }}
            </span>
            <span v-if="dziwdeu.dziwwngyan.thytten !== ''">
              {{ `⇒${dziwdeu.dziwwngyan.thytten}` }}
            </span>
          </VCardText>
        </VCard>
      </VCol>
      <VDivider />
      <VCol
        v-for="xrongmyuk in dziwdeu.twkDziwqrim"
        :key="xrongmyuk.pieutiwbyo"
        cols="12"
      >
        <VCard variant="outlined">
          <VCardTitle
            @click="qanZyepheng(xrongmyuk)"
            style="cursor: pointer"
          >
            {{ xrongmyuk.zyepheng }}
          </VCardTitle>
          <VCardSubtitle>
            {{ twkDryenthungQrimlyi(xrongmyuk) }}
            <span
              class="hei-sui-in"
              @click="qanShiwxryn(xrongmyuk)"
            >
              {{ xrongmyuk.shiwxryn }}
            </span>
          </VCardSubtitle>
          <VCardText>
            <div v-if="xrongmyuk.ChXPyanchet">
              {{ `《切韵》${twkChX(xrongmyuk)}` }}
            </div>
            <div v-if="xrongmyuk.XXPyanchet">
              {{ `《王韵》${twkXX(xrongmyuk)}` }}
            </div>
            <div v-if="xrongmyuk.KXPyanchet">
              {{ `《廣韵》${twkKX(xrongmyuk)}` }}
            </div>
            <div v-if="xrongmyuk.DzXPyanchet">
              {{ `《集韵》${twkDzX(xrongmyuk)}` }}
            </div>
            <div v-if="xrongmyuk.QhZQhShienglyi">
              {{ `《漢辭海》${twkQhZQh(xrongmyuk)}` }}
            </div>
            <p v-if="xrongmyuk.qrimtyo">
              {{ `釋音：${xrongmyuk.qrimtyo}` }}
            </p>
            <p v-if="xrongmyuk.ngrietyo">
              {{ `釋音義：${xrongmyuk.ngrietyo}` }}
            </p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped lang="css">
.hei-sui-in {
  border: 1px solid;
  cursor: pointer;
}
</style>
