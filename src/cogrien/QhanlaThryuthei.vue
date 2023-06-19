<script setup lang="ts">
import { jyongQhanlakho } from '@/changkho/qhanla'

const qhanlakho = jyongQhanlakho()
</script>

<template>
  <VNavigationDrawer
    v-model="qhanlakho.thryuthei"
    location="left"
  >
    <VContainer>
      <VRow>
        <VCol cols="12">
          <VTextField
            clearable
            v-model="qhanlakho.myunpunkhyang"
            :placeholder="'天地玄黄，宇宙洪荒。日月盈昃，辰宿列張。寒來暑往，秋收冬藏。閏餘成歲，律吕調陽。'"
            label="漢字文"
            variant="underlined"
          />
        </VCol>
        <VCol cols="12">
          <VBtn
            @click="qhanlakho.triwKetkua()"
            block
            rounded
          >
            檢索
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
