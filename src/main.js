import Vue from 'vue'
import App from './App.vue'
import bootstrapVue  from 'bootstrap-vue' 
import bulma from 'bulma'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import GanttElastic from "gantt-elastic"
// import Header from "gantt-elastic-header"
//import 'custom.scss'

Vue.config.productionTip = false
Vue.use(bootstrapVue)
Vue.use(bulma)

new Vue({
  render: h => h(App),
}).$mount('#app')
