import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify'



Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  router,
  vuetify,
  render: h=>h(App)
}).$mount('#app')
