<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import { useTheme as jyongTyodei } from 'vuetify'

const xeithongkho = jyongXeithongkho()
const tyodei = jyongTyodei()

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
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
