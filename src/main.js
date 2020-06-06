import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker' // service worker
import router from './router' // router
import store from './store' // vuex store management
import i18n from './i18n' // il8n language
import BootstrapVue from 'bootstrap-vue'; // bootstrap vue
import moment from "moment"; // to control date format

Vue.use(BootstrapVue);

Vue.config.productionTip = false
//  filter
Vue.filter('dateformat', function (date) {
  if (!date) return ''
  return moment(date).format("MMM DD, YYYY")
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
