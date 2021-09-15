import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VConsole from 'vconsole'
const vConsole = new VConsole()
Vue.use(vConsole)
console.info("vconsole-info-测试")
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


