import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
