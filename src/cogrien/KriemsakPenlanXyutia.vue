<script setup lang="ts">
import { ref } from 'vue'
import { jyongXeithongkho } from '@/changkho/xeithong'
import { useTheme as jyongTyodei } from 'vuetify'

const xeithongkho = jyongXeithongkho()
const tyodei = jyongTyodei()
const dialog = ref(false)

const xuanTyodei = () => (tyodei.global.name.value = tyodei.global.current.value.dark ? 'light' : 'dark')
</script>

<template>
  <VNavigationDrawer
    v-model="xeithongkho.kriemsakPenlanXyutiaThryuthei"
    location="right"
  >
    <VContainer>
      <VRow>
        <VCol cols="12">
          <VBtn
            @click="xuanTyodei()"
            block
          >
            <VIcon>mdi-lightbulb</VIcon>
          </VBtn>
        </VCol>
        <VCol cols="12">
          <VDialog v-model="dialog">
            <template v-slot:activator="{ props }">
              <VBtn
                v-bind="props"
                block
              >
                <VIcon>mdi-format-font</VIcon>
              </VBtn>
            </template>

            <VCard>
              <VCardText>
                Google Fontから適切なフォントをインポートします。データ量がそこそこ多いので氣をつけてくださいませ。
              </VCardText>
              <VCard-actions>
                <VBtn
                  color="primary"
                  block
                  @click="dialog = false"
                  >Close Dialog</VBtn
                >
              </VCard-actions>
            </VCard>
          </VDialog>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
