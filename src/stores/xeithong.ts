import { ref } from "vue";
import { defineStore } from "pinia";

type Pieuchiem = string | null;
type Thryuthei = boolean | null;

export const jyongXeithongkho = defineStore("xeithong", () => {
  const kriemsakPenlanPieuchiem = ref(<Pieuchiem>null);
  const kriemsakPenlanThryuthei = ref(<Thryuthei>null);

  const xuanKriemsakPenlanThryuthei = () => {
    kriemsakPenlanThryuthei.value = !kriemsakPenlanThryuthei.value;
  };

  return {
    kriemsakPenlanPieuchiem,
    kriemsakPenlanThryuthei,
    xuanKriemsakPenlanThryuthei,
  };
});
