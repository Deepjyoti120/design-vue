 
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)
