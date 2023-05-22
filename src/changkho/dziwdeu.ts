import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { DziwqrimCungCileu, DziwxengSikrokXaumraCileu } from '@/cisren/lyixeng'
import { jyongLeksriwkho } from '@/changkho/leksriw'

export const jyongDziwdeukho = defineStore('dziwdeu', () => {
  const dziwdu = ref('')
  const dziwduco = ref(<string[]>[])
  const dziwqrimco = ref(<DziwqrimCungCileu[]>[])
  const dziwxengSikrokXaumra = ref(<DziwxengSikrokXaumraCileu[]>[])
  const jiwtheidziw = ref('')

  const twkDziwqrim = computed(() => dziwqrimco.value)

  const triwDziwdu = async (grien: string): Promise<void> => {
    dziwdu.value = ''
    dziwduco.value = []
    dziwxengSikrokXaumra.value = []
    const TIENGDZIW = (await import('@/cileu/TIENGDZIW.json')).default
    const zyoktiengLietprieu = TIENGDZIW.filter((kiwlyok) => kiwlyok.zyokdziw === grien)
    for (const xrongmyuk of zyoktiengLietprieu) {
      dziwduco.value.push(xrongmyuk.tiengdziw)
    }
    if (dziwduco.value.length === 1) {
      triwQrimXeng(dziwduco.value[0])
    } else if (dziwduco.value.includes(grien)) {
      triwQrimXeng(grien)
    } else {
      dziwdu.value = ''
    }
  }
  const triwQrimXeng = async (grien: string): Promise<void> => {
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
          pieutiwbyo: dziwqrimKrap.pieutiwbyo,
          dziwbyo: dziwqrimKrap.dziwbyo,
          dziwbyoNguaidziw: dziwqrimKrap.dziwbyoNguaidziw,
          zyepheng: dziwqrimKrap.zyepheng,
          zyephengNguaidziw: dziwqrimKrap.zyephengNguaidziw,
          shiwxryn: dziwqrimKrap.shiwxryn,
          xrynshiep: dziwqrimKrap.xrynshiep,
          khwixwp: dziwqrimKrap.khwixwp,
          twixryi: dziwqrimKrap.twixryi,
          sishieng: dziwqrimKrap.sishieng,
          xrynmyuk: dziwqrimKrap.xrynmyuk,
          shiengmu: dziwqrimKrap.shiengmu,
          xrynmu: dziwqrimKrap.xrynmu,
          thongqitmra: dziwqrimKrap.thongqitmra,
          ChXZiosryoSishieng: dziwqrimQrit.ChXZiosryoSishieng,
          ChXZiosryoXrynmyuk: dziwqrimQrit.ChXZiosryoXrynmyuk,
          ChXZiosryoSieuxryn: dziwqrimQrit.ChXZiosryoSieuxryn,
          ChXDzankryenlyi: dziwqrimQrit.ChXDzankryenlyi,
          ChXDzankryen: dziwqrimQrit.ChXDzankryen,
          ChXPyanchet: dziwqrimQrit.ChXPyanchet,
          ChXPyanchetPotyo: dziwqrimQrit.ChXPyanchetPotyo,
          XXPyanchet: dziwqrimQrit.XXPyanchet,
          XXPyanchetPotyo: dziwqrimQrit.XXPyanchetPotyo,
          KXPyanchet: dziwqrimQrit.KXPyanchet,
          KXPyanchetPotyo: dziwqrimQrit.KXPyanchetPotyo,
          DzXPyanchet: dziwqrimQrit.DzXPyanchet,
          DzXPyanchetPotyo: dziwqrimQrit.DzXPyanchetPotyo,
          QhZQhShienglyi: dziwqrimQrit.QhZQhShienglyi,
          QhZQhXrynlyi: dziwqrimQrit.QhZQhXrynlyi,
          QhZQhDeuyi: dziwqrimQrit.QhZQhDeuyi,
          diangkoXrynbu: dziwqrimPrieng.diangkoXrynbu,
          ZNgShiwxryn: dziwqrimPrieng.ZNgShiwxryn,
          ZNgShiwxrynPotyo: dziwqrimPrieng.ZNgShiwxrynPotyo,
          qrimtyo: dziwqrimPrieng.qrimtyo,
          ngrietyo: dziwqrimPrieng.ngrietyo,
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
    twkDziwqrim,
    triwDziwdu,
    triwQrimXeng,
  }
})
