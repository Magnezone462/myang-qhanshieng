import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import Qiwngjyong from '@/Qiwngjyong.vue'
// import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import '@/cisren/dziwthei.css'
import '@/cisren/tyoqieu.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()
pinia.use(createPersistedState())

const qiwngjyong = createApp(Qiwngjyong)

qiwngjyong.use(pinia)
// app.use(router)
qiwngjyong.use(vuetify)

qiwngjyong.mount('#app')
