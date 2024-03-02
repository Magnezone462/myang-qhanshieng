import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { GyungkioChakngo, KriemsakDziwqrimPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import type { DziwqrimKrapCileu } from '@/cisren/lyixeng'

type Xralakhyang = string | null

export const jyongKriemsakDziwqrimkho = defineStore('kriemsakDziwqrim', () => {
  const pyangshiwk = ref<Pyangshiwk>(Pyangshiwk.zyepheng)
  const zyepheng = ref('')
  const shiwxryn = ref<Xralakhyang>(null)
  const xrynshiep = ref<Xralakhyang>(null)
  const khwixwp = ref<Xralakhyang>(null)
  const twixryi = ref<Xralakhyang>(null)
  const sishieng = ref<Xralakhyang>(null)
  const xrynmyuk = ref<Xralakhyang>(null)
  const shiengmu = ref<Xralakhyang>(null)
  const ketkua = ref<DziwqrimKrapCileu[]>([])

  const twkKetkua = computed(() => ketkua.value)

  const triwPyangshiwk = (grien: Pyangshiwk): void => void (pyangshiwk.value = grien)

  const triwZyepheng = (grien: string): void => void (zyepheng.value = grien)

  const triwShiwxryn = (grien: Xralakhyang): void => void (shiwxryn.value = grien)

  const triwKetkua = async (): Promise<void> => {
    const DZIWQRIM_KRAP = (await import('@/cileu/DZIWQRIM_KRAP.json')).default

    ketkua.value = DZIWQRIM_KRAP.filter((kiwlyok) => {
      switch (pyangshiwk.value) {
        case Pyangshiwk.zyepheng:
          return kiwlyok.zyepheng === zyepheng.value
        case Pyangshiwk.briengshyixryn: {
          const myuinip = !shiwxryn.value && !shiengmu.value
          const lioShiwxryn = shiwxryn.value ? kiwlyok.shiwxryn === shiwxryn.value : true
          const lioShiengmu = shiengmu.value ? kiwlyok.shiengmu === shiengmu.value : true
          return !myuinip && lioShiwxryn && lioShiengmu
        }
        case Pyangshiwk.twixrynxrok: {
          const myuinip =
            !xrynshiep.value &&
            !khwixwp.value &&
            !twixryi.value &&
            !sishieng.value &&
            !xrynmyuk.value &&
            !shiengmu.value
          const lioXrynshiep = xrynshiep.value ? kiwlyok.xrynshiep === xrynshiep.value : true
          const lioKhwixwp = khwixwp.value ? kiwlyok.khwixwp === khwixwp.value : true
          const lioTwixryi = twixryi.value ? kiwlyok.twixryi === twixryi.value : true
          const lioSishieng = sishieng.value ? kiwlyok.sishieng === sishieng.value : true
          const lioXrynmyuk = xrynmyuk.value ? kiwlyok.xrynmyuk === xrynmyuk.value : true
          const lioShiengmu = shiengmu.value ? kiwlyok.shiengmu === shiengmu.value : true
          return (
            !myuinip &&
            lioXrynshiep &&
            lioKhwixwp &&
            lioTwixryi &&
            lioSishieng &&
            lioXrynmyuk &&
            lioShiengmu
          )
        }

        default:
          throw new GyungkioChakngo(pyangshiwk.value)
      }
    })
  }

  return {
    pyangshiwk,
    zyepheng,
    shiwxryn,
    xrynshiep,
    khwixwp,
    twixryi,
    sishieng,
    xrynmyuk,
    shiengmu,
    twkKetkua,
    triwPyangshiwk,
    triwZyepheng,
    triwShiwxryn,
    triwKetkua,
  }
})
