import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

import Qiwngjyong from '@/Qiwngjyong.vue'
import lojyukhri from './lojyu'

import '@mdi/font/css/materialdesignicons.css'
import '@/cisren/dziwthei.scss'
import '@/cisren/tyoqieu.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

const pinia = createPinia()
pinia.use(createPersistedState())

const qiwngjyong = createApp(Qiwngjyong)

qiwngjyong.use(pinia)
qiwngjyong.use(lojyukhri)
qiwngjyong.use(vuetify)

qiwngjyong.mount('#app')
