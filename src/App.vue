<script setup lang="ts">
import { ref } from "vue";
import { jyongKriemsakkho } from "./stores/kriemsak";

type Drawer = boolean | null;

const kriemsakkho = jyongKriemsakkho();

const drawer = ref(<Drawer>null);

const xuanThryuthei = () => {
  drawer.value = !drawer.value;
};
const qhruaSikrokXaumra = (xaumraco: string[]) => xaumraco.join("、");
</script>

<template>
  <v-app>
    <v-system-bar> </v-system-bar>

    <v-app-bar>
      <v-app-bar-nav-icon @click="xuanThryuthei()"></v-app-bar-nav-icon>
      <v-toolbar-title>網絡本《漢字文聲義》</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" bottom>
      <v-sheet color="grey-lighten-4" class="pa-4">
        <v-text-field
          v-model="kriemsakkho.qhandziwShyonip"
          label="漢字"
          placeholder="天地玄黄宇宙洪荒"
          clearable
        />
        <v-btn block rounded @click="kriemsakkho.triwKriemsakKetkua()">
          檢索
        </v-btn>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="baryu in kriemsakkho.twkKriemsakKetkua"
          :key="baryu.pieutiwbyo"
          @click="kriemsakkho.syendrakKriemsakKetkua(baryu)"
          link
        >
          <v-list-item-title>{{ baryu.dziw }}</v-list-item-title>
          {{ qhruaSikrokXaumra(baryu.sikrok_xaumra) }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            {{ kriemsakkho.twkSrioSyenKriemsakKetkua.dziw }}
            <!-- {{
              qhruaSikrokXaumra(
                kriemsakkho.twkSrioSyenKriemsakKetkua.sikrok_xaumra
              )
            }} -->
            <div
              v-for="baryu in kriemsakkho.twkKriemsakKetkuaDziwqrim"
              :key="baryu.pieutiwbyo"
            >
              {{ baryu.zyepheng }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
