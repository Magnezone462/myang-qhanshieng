<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import ChriosriwTyolan from '@/cogrien/ChriosriwTyolan.vue'
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const xeithongkho = jyongXeithongkho()
const dziwdeu = jyongDziwdeukho()
const lojyu = useRoute()

onMounted(() => {
  if (
    dziwdeu.dziwdu === '' ||
    lojyu.query.dziwdu !== '' ||
    typeof lojyu.query.dziwdu === 'string'
  ) {
    dziwdeu.triwDziwdu(lojyu.query.dziwdu as string)
  }
})
</script>

<template>
  <VApp>
    <ShiettriwPenlan temporary />

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
      <VAppBarNavIcon @click="xeithongkho.xuanKriemsakPenlanThryuthei()" />
      <VAppBarTitle
        @click="$router.push({ name: 'tyoqieu', query: undefined }), dziwdeu.triwDziwdu('')"
        class="appu-ba-taitoru"
        >漢字文聲義</VAppBarTitle
      >
      <VBtn
        @click="xeithongkho.xuanShiettriwPenlanThryuthei()"
        icon="mdi-cog-outline"
      >
      </VBtn>
    </VAppBar>

    <KriemsakPenlan />

    <VMain>
      <ChriosriwTyolan v-if="dziwdeu.dziwdu === ''" />
      <KriemsakTyolan v-else />
    </VMain>
  </VApp>
</template>

<style lang="scss">
.appu-ba-taitoru {
  cursor: pointer;
}
</style>
