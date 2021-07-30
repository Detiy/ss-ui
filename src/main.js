import Vue from 'vue'
import App from './App.vue'
import SsUI from '../packages'
Vue.use(SsUI)
Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
