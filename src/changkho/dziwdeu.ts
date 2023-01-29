import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import DZIWTYONG from '@/cileu/DZIWTYONG.json'
import DZIWXENG_SIKROK_XAUMRA from '@/cileu/DZIWXENG_SIKROK_XAUMRA.json'
import DZIWQRIM from '@/cileu/dziwqrim.json'
import TIENGDZIW from '@/cileu/TIENGDZIW.json'
import type { DziwqrimCileu, DziwxengSikrokXaumraCileu } from '@/cisren/lyixeng'
import { jyongLeksriwkho } from './leksriw'

export const jyongDziwdeukho = defineStore('dziwdeu', () => {
  const dziwdu = ref('')
  const dziwxengSikrokXaumra = ref(<DziwxengSikrokXaumraCileu[]>[])
  const dziwqrim = ref(<DziwqrimCileu[]>[])
  const dziwbyo = ref('')
  const jiwtheidziw = ref('')

  const twkDziwqrim = computed(() => dziwqrim.value)

  const triwDziwdu = (grien: string) => {
    dziwdu.value = ''
    dziwxengSikrokXaumra.value = []
    dziwqrim.value = []
    const zyoktiengLietprieu = TIENGDZIW.filter((kiwlyok) => {
      return kiwlyok.zyokdziw === grien
    })
    for (const xrongmyuk of zyoktiengLietprieu) {
      dziwdu.value = dziwdu.value + xrongmyuk.tiengdziw
    }
    if (dziwdu.value.length === 1) {
      triwQrimXeng(dziwdu.value)
    } else if (dziwdu.value.includes(grien)) {
      triwQrimXeng(grien)
    } else {
      dziwbyo.value = ''
    }
  }
  const triwQrimXeng = (grien: string) => {
    const leksriwkho = jyongLeksriwkho()

    dziwbyo.value = grien
    leksriwkho.kraDziwbyo(grien)
    const jiwtheiSinsiwk = DZIWTYONG.find((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    const jiwtheidziwco: string[] = []
    if (jiwtheiSinsiwk?.syenjyongdziw) jiwtheidziwco.push(`選用“${jiwtheiSinsiwk.syenjyongdziw}”`)
    if (jiwtheiSinsiwk?.krenqhruadziw) jiwtheidziwco.push(`簡作“${jiwtheiSinsiwk.krenqhruadziw}”`)
    if (jiwtheiSinsiwk?.nitpundziw) jiwtheidziwco.push(`日作“${jiwtheiSinsiwk.nitpundziw}”`)
    jiwtheidziw.value = jiwtheidziwco.join('，')
    !jiwtheidziw.value ? true : (jiwtheidziw.value = jiwtheidziw.value.concat('。'))

    dziwxengSikrokXaumra.value = DZIWXENG_SIKROK_XAUMRA.filter((tuiziang) => {
      return tuiziang.dziwbyo === grien
    })
    dziwqrim.value = DZIWQRIM.filter((tuiziang) => {
      return tuiziang.dziw === grien
    })
  }

  return {
    dziwdu,
    dziwxengSikrokXaumra,
    dziwqrim,
    dziwbyo,
    jiwtheidziw,
    twkDziwqrim,
    triwDziwdu,
    triwQrimXeng,
  }
})
