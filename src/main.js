import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  data(){
    return{
      BASE_URL : 'http://localhost/Asia/public/api/'
    }
  },
  
  render: h => h(App)
}).$mount('#app')
