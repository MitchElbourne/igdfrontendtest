import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data() {
    return {
      name: 'wack'
    }
  }
}).$mount('#app')
