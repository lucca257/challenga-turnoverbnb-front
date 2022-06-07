import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css"
import './plugins/validators'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),

}).$mount('#app')

Vue.mixin({
  data: function() {
    return {
      displayError: false,
      base_url: process.env.VUE_APP_API_BNB_BANK_URL,
      current_year: new Date().getFullYear(),
      current_month: new Date().toLocaleString('default', { month: 'long' }),
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
