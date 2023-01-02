import { ref } from "vue";
import { defineStore } from "pinia";

export const jyongShiochiemkho = defineStore(
  "shiochiem",
  () => {
    // oyazi no bukkumaku hairetu desu
    const dziwbyoco = ref(<string[]>[]);

    // dziwbyoco kara oyazi o sakuzyo suru kansu desu
    const drioDziwbyo = (grien: string) => {
      dziwbyoco.value = dziwbyoco.value.filter((dziwbyo) => dziwbyo !== grien);
    };

    // dziwbyoco e oyazi o tuika suru kansu desu
    const kraDziwbyo = (grien: string) => {
      if (grien) dziwbyoco.value.push(grien);
    };

    // dziwbyoco ni oyazi ga aruka hante suru kansu desu
    const xwmDziwbyo = (grien: string) => dziwbyoco.value.includes(grien);

    // dziwbyoco no oyazi o kirikaeru kansu desu
    const xuanDziwbyo = (grien: string) => {
      xwmDziwbyo(grien) ? drioDziwbyo(grien) : kraDziwbyo(grien);
    };

    return { dziwbyoco, drioDziwbyo, kraDziwbyo, xwmDziwbyo, xuanDziwbyo };
  },
  { persist: true }
);
