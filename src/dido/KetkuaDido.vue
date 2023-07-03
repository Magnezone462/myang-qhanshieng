<script setup lang="ts">
import { jyongXeithongkho } from '@/changkho/xeithong'
import { jyongDziwdeukho } from '@/changkho/dziwdeu'
import KriemsakPenlan from '@/cogrien/KriemsakPenlan.vue'
import KriemsakTyolan from '@/cogrien/KriemsakTyolan.vue'
import ShiettriwPenlan from '@/cogrien/ShiettriwPenlan.vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const xeithongkho = jyongXeithongkho()
const dziwdeu = jyongDziwdeukho()
const lojyu = useRoute()
const lojyukhri = useRouter()

onMounted(() => {
  if (typeof lojyu.params.dziwdu === 'string') {
    if (dziwdeu.dziwdu !== lojyu.params.dziwdu) dziwdeu.triwDziwdu(lojyu.params.dziwdu)
  } else lojyukhri.push({ name: 'tyoqieu' })
})

watch(
  () => lojyu.params.dziwdu,
  (dziwdu) => {
    if (typeof dziwdu === 'string') {
      if (dziwdeu.dziwdu !== dziwdu) dziwdeu.triwDziwdu(dziwdu)
    } else lojyukhri.push({ name: 'tyoqieu' })
  },
)
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
        @click="$router.push({ name: 'tyoqieu' }), dziwdeu.triwDziwdu('')"
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
      <KriemsakTyolan />
    </VMain>
  </VApp>
</template>

<style lang="scss">
.appu-ba-taitoru {
  cursor: pointer;
}
</style>
