import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import DZIWTYONG from '@/cileu/DZIWTYONG.json'
import DZIWQRIM_KRAP from '@/cileu/DZIWQRIM_KRAP.json'
import DZIWQRIM_QRIT from '@/cileu/DZIWQRIM_QRIT.json'
import DZIWQRIM_PRIENG from '@/cileu/DZIWQRIM_PRIENG.json'
import DZIWXENG_SIKROK_XAUMRA from '@/cileu/DZIWXENG_SIKROK_XAUMRA.json'
import TIENGDZIW from '@/cileu/TIENGDZIW.json'
import type { DziwqrimCungCileu, DziwxengSikrokXaumraCileu } from '@/cisren/lyixeng'
import { jyongLeksriwkho } from '@/changkho/leksriw'

export const jyongDziwdeukho = defineStore('dziwdeu', () => {
  const dziwdu = ref('')
  const dziwduco = ref(<string[]>[])
  const dziwqrimco = ref(<DziwqrimCungCileu[]>[])
  const dziwxengSikrokXaumra = ref(<DziwxengSikrokXaumraCileu[]>[])
  const jiwtheidziw = ref('')

  const twkDziwqrim = computed(() => dziwqrimco.value)

  const triwDziwdu = (grien: string) => {
    dziwdu.value = ''
    dziwduco.value = []
    dziwxengSikrokXaumra.value = []
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
  const triwQrimXeng = (grien: string) => {
    dziwqrimco.value = []
    const leksriwkho = jyongLeksriwkho()

    dziwdu.value = grien
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

    dziwxengSikrokXaumra.value = DZIWXENG_SIKROK_XAUMRA.filter((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    const dziwqrimKrapco = DZIWQRIM_KRAP.filter((kiwlyok) => {
      return kiwlyok.dziwbyo === grien
    })
    for (const dziwqrimKrap of dziwqrimKrapco) {
      const dziwqrimQrit = DZIWQRIM_QRIT.find((kiwlyok) => {
        return kiwlyok.pieutiwbyo === dziwqrimKrap.pieutiwbyo
      })
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
