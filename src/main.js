import Vue from 'vue'
import { BootstrapVue, IconsPlugin , BIcon } from 'bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
Vue.prototype.$http = axios

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// using b-icon component
Vue.component('b-icon', BIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
