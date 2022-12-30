import { ref } from "vue";
import { defineStore } from "pinia";

type Pieuchiem = string | null;
type Thryuthei = boolean | null;

export const jyongXeithongkho = defineStore("xeithong", () => {
  const KriemsakPenlanPieuchiem = ref(<Pieuchiem>null);
  const KriemsakPenlanThryuthei = ref(<Thryuthei>null);

  return { KriemsakPenlanPieuchiem, KriemsakPenlanThryuthei };
});
