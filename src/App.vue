<script setup lang="ts">
import { ref } from "vue";
import { useKriemsakChangkho } from "./stores/kriemsak";

const drawer = ref(null);
const kriemsakChangkho = useKriemsakChangkho();
const krakshiwkqhruaSikrokXaumra = (xaumraco: string[]) => {
  let ranranru = "";
  for (const nope of xaumraco) {
    ranranru = `${ranranru}、${nope}`;
  }
  return ranranru;
};
</script>

<template>
  <v-app id="inspire">
    <v-system-bar>
      <h1>網絡本《漢字文聲義》</h1>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" bottom>
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-text-field
          v-model="kriemsakChangkho.qhandziw"
          label="漢字"
          placeholder="天地玄黄宇宙洪荒"
          clearable
        />
        <v-btn block rounded @click="kriemsakChangkho.makeKriemsakKetkua()"
          >檢索</v-btn
        >
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="value in kriemsakChangkho.shyoKriemsakKetkua"
          :key="value.pieutiwbyo"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ value.dziw }}</v-list-item-title>
            {{ krakshiwkqhruaSikrokXaumra(value.sikrok_xaumra) }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main> </v-main>
  </v-app>
</template>
