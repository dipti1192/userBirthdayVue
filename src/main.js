import Vue from 'vue';
import App from './App.vue';
import router from './routes'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   router: router,
//   components: { App }
// })