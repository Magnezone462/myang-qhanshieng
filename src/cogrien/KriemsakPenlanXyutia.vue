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
  <v-navigation-drawer
    v-model="xeithongkho.kriemsakPenlanXyutiaThryuthei"
    location="right"
  >
    <v-btn
      @click="xuanTyodei()"
      block
    >
      <v-icon>mdi-lightbulb</v-icon>
    </v-btn>
    <div class="text-center">
      <v-dialog v-model="dialog">
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
            block
          >
            <v-icon>mdi-format-font</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-text>
            Google Fontから適切なフォントをインポートします。データ量がそこそこ多いので氣をつけてくださいませ。
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              block
              @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-navigation-drawer>
</template>
