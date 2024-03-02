import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { GyungkioChakngo, KriemsakDziwxengPyangshiwk as Pyangshiwk } from '@/cisren/muikio'
import type { Dziwxeng } from '@/cisren/lyixeng'

export const jyongKriemsakDziwxengkho = defineStore('kriemsakDziwxeng', () => {
  const pyangshiwk = ref<Pyangshiwk>(Pyangshiwk.sikrokXaumra)
  const sikrokXaumra = ref('')
  const qhzqhBushyu = ref('')
  const qhzqhZhiwngjio = ref('')
  const ketkua = ref<Dziwxeng[]>([])

  const twkKetkua = computed(() => ketkua.value)

  const triwPyangshiwk = (kradriw: Pyangshiwk): void => void (pyangshiwk.value = kradriw)

  const triwKetkua = async (): Promise<void> => {
    switch (pyangshiwk.value) {
      case Pyangshiwk.sikrokXaumra: {
        const DZIWXENG_SIKROK_XAUMRA = (await import('@/cileu/DZIWXENG_SIKROK_XAUMRA.json')).default
        ketkua.value = DZIWXENG_SIKROK_XAUMRA.filter((kiwlyok) => {
          for (const xaumra of kiwlyok.sikrokXaumra) return xaumra === sikrokXaumra.value
        })
        break
      }

      case Pyangshiwk.QhZQhBushyu: {
        const DZIWXENG_QhZQh_BUSHYU = (await import('@/cileu/DZIWXENG_QhZQh_BUSHYU.json')).default
        ketkua.value = DZIWXENG_QhZQh_BUSHYU.filter(
          (kiwlyok) => kiwlyok.bushyu === qhzqhBushyu.value,
        )
        break
      }

      default:
        throw new GyungkioChakngo(pyangshiwk.value)
    }
  }

  return {
    pyangshiwk,
    qhzqhBushyu,
    qhzqhZhiwngjio,
    sikrokXaumra,
    ketkua,
    twkKetkua,
    triwPyangshiwk,
    triwKetkua,
  }
})
