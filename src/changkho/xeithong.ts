import { ref } from 'vue'
import { defineStore } from 'pinia'

type Pieuchiem = string | null
type Thryuthei = boolean | null

export const jyongXeithongkho = defineStore('xeithong', () => {
  const kriemsakPenlanCatiaPieuchiemDeiqit = ref(<Pieuchiem>null)
  const kriemsakPenlanCatiaPieuchiemKriemsak = ref(<Pieuchiem>null)
  const kriemsakPenlanCatiaThryuthei = ref(<Thryuthei>null)
  const kriemsakPenlanXyutiaPieuchiem = ref(<Pieuchiem>null)
  const kriemsakPenlanXyutiaThryuthei = ref(<Thryuthei>false)

  const xuanKriemsakPenlanThryutheiCatia = () => {
    kriemsakPenlanCatiaThryuthei.value = !kriemsakPenlanCatiaThryuthei.value
  }

  const xuanKriemsakPenlanThryutheiXyutia = () => {
    kriemsakPenlanXyutiaThryuthei.value = !kriemsakPenlanXyutiaThryuthei.value
  }

  return {
    kriemsakPenlanCatiaPieuchiemDeiqit,
    kriemsakPenlanCatiaPieuchiemKriemsak,
    kriemsakPenlanCatiaThryuthei,
    kriemsakPenlanXyutiaPieuchiem,
    kriemsakPenlanXyutiaThryuthei,
    xuanKriemsakPenlanThryutheiCatia,
    xuanKriemsakPenlanThryutheiXyutia,
  }
})
