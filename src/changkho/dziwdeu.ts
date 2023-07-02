import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {
  DziwqrimCungCileu,
  DziwwngyanCileu,
  DziwxengSikrokXaumraCileu,
} from '@/cisren/lyixeng'
import { jyongLeksriwkho } from '@/changkho/leksriw'
import { useRouter } from 'vue-router'

export const jyongDziwdeukho = defineStore('dziwdeu', () => {
  const lojyukhri = useRouter()

  const dziwdu = ref('')
  const dziwduco = ref(<string[]>[])
  const dziwqrimco = ref(<DziwqrimCungCileu[]>[])
  const dziwxengSikrokXaumra = ref(<DziwxengSikrokXaumraCileu[]>[])
  const jiwtheidziw = ref('')
  const dziwwngyan = ref(<DziwwngyanCileu | null | undefined>{})

  const twkDziwqrim = computed(() => dziwqrimco.value)

  const triwDziwdu = async (grien: string): Promise<void> => {
    dziwdu.value = ''
    dziwduco.value = []
    dziwxengSikrokXaumra.value = []
    dziwwngyan.value = null
    const TIENGDZIW = (await import('@/cileu/TIENGDZIW.json')).default
    const DZIWWNGYAN = (await import('@/cileu/dziwwngyan/DZIWWNGYAN.json')).default
    const zyoktiengLietprieu = TIENGDZIW.filter((kiwlyok) => kiwlyok.zyokdziw === grien)
    for (const xrongmyuk of zyoktiengLietprieu) {
      dziwduco.value.push(xrongmyuk.tiengdziw)
    }
    if (dziwduco.value.length === 0) {
      dziwdu.value = ''
      lojyukhri.push({ name: 'tyoqieu', query: undefined })
    } else if (dziwduco.value.length === 1) {
      triwQrimXeng(dziwduco.value[0])
      dziwwngyan.value = DZIWWNGYAN.find((kiwlyok) => kiwlyok.dziwbyo === dziwduco.value[0])
    } else if (dziwduco.value.includes(grien)) {
      triwQrimXeng(grien)
      dziwwngyan.value = DZIWWNGYAN.find((kiwlyok) => kiwlyok.dziwbyo === grien)
    } else {
      dziwdu.value = ''
    }
  }
  const triwQrimXeng = async (grien: string): Promise<void> => {
    lojyukhri.push({ name: 'tyoqieu', query: { dziwdu: grien } })
    dziwqrimco.value = []
    const leksriwkho = jyongLeksriwkho()

    dziwdu.value = grien
    leksriwkho.kraDziwbyo(grien)
    const DZIWTYONG = (await import('@/cileu/DZIWTYONG.json')).default
    const jiwtheiSinsiwk = DZIWTYONG.find((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    const jiwtheidziwco: string[] = []
    if (jiwtheiSinsiwk?.syenjyongdziw) jiwtheidziwco.push(`選用“${jiwtheiSinsiwk.syenjyongdziw}”`)
    if (jiwtheiSinsiwk?.krenqhruadziw) jiwtheidziwco.push(`簡作“${jiwtheiSinsiwk.krenqhruadziw}”`)
    if (jiwtheiSinsiwk?.nitpundziw) jiwtheidziwco.push(`日作“${jiwtheiSinsiwk.nitpundziw}”`)
    jiwtheidziw.value = jiwtheidziwco.join('，')
    !jiwtheidziw.value ? true : (jiwtheidziw.value = jiwtheidziw.value.concat('。'))

    const DZIWXENG_SIKROK_XAUMRA = (await import('@/cileu/DZIWXENG_SIKROK_XAUMRA.json')).default
    dziwxengSikrokXaumra.value = DZIWXENG_SIKROK_XAUMRA.filter((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    const DZIWQRIM_KRAP = (await import('@/cileu/DZIWQRIM_KRAP.json')).default
    const dziwqrimKrapco = DZIWQRIM_KRAP.filter((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    for (const dziwqrimKrap of dziwqrimKrapco) {
      const DZIWQRIM_QRIT = (await import('@/cileu/DZIWQRIM_QRIT.json')).default
      const dziwqrimQrit = DZIWQRIM_QRIT.find((kiwlyok) => {
        return kiwlyok.pieutiwbyo === dziwqrimKrap.pieutiwbyo
      })
      const DZIWQRIM_PRIENG = (await import('@/cileu/DZIWQRIM_PRIENG.json')).default
      const dziwqrimPrieng = DZIWQRIM_PRIENG.find((kiwlyok) => {
        return kiwlyok.pieutiwbyo === dziwqrimKrap.pieutiwbyo
      })
      if (dziwqrimQrit && dziwqrimPrieng) {
        const dziwqrim: DziwqrimCungCileu = {
          ...dziwqrimKrap,
          ...dziwqrimQrit,
          ...dziwqrimPrieng,
        }
        dziwqrimco.value.push(dziwqrim)
      }
    }
  }

  return {
    dziwdu,
    dziwduco,
    dziwqrimco,
    dziwxengSikrokXaumra,
    jiwtheidziw,
    dziwwngyan,
    twkDziwqrim,
    triwDziwdu,
    triwQrimXeng,
  }
})
