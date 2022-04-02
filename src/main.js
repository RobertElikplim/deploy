import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

Axios.defaults.baseURL = 'https://pudcapi.herokuapp.com/';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { Axios } from 'axios'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
