import { ref } from "vue";
import { defineStore } from "pinia";

type Pieuchiem = string | null;
type Thryuthei = boolean | null;

export const jyongXeithongkho = defineStore("xeithong", () => {
  const kriemsakPenlanPieuchiem = ref(<Pieuchiem>null);
  const kriemsakPenlanThryutheiCatia = ref(<Thryuthei>null);
  const kriemsakPenlanThryutheiXyutia = ref(<Thryuthei>null);

  const xuanKriemsakPenlanThryutheiCatia = () => {
    kriemsakPenlanThryutheiCatia.value = !kriemsakPenlanThryutheiCatia.value;
  };

  const xuanKriemsakPenlanThryutheiXyutia = () => {
    kriemsakPenlanThryutheiXyutia.value = !kriemsakPenlanThryutheiXyutia.value;
  };

  return {
    kriemsakPenlanPieuchiem,
    kriemsakPenlanThryutheiCatia,
    kriemsakPenlanThryutheiXyutia,
    xuanKriemsakPenlanThryutheiCatia,
    xuanKriemsakPenlanThryutheiXyutia,
  };
});
