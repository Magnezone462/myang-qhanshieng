import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import Qiwngjyong from '@/Qiwngjyong.vue'
import lojyukhri from '@/lojyukhri'
import '@mdi/font/css/materialdesignicons.css'
import '@/cisren/dziwthei.scss'
import '@/cisren/tyoqieu.scss'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const vuetify = createVuetify()

const pala = createPinia()
pala.use(createPersistedState())

const qiwngjyong = createApp(Qiwngjyong)
qiwngjyong.use(pala)
qiwngjyong.use(lojyukhri)
qiwngjyong.use(vuetify)
qiwngjyong.mount('#app')
