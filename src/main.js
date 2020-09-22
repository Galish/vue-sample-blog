import Vue from 'vue'
import { Plugin } from 'vue-fragment'
import 'semantic-ui-css/semantic.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/responsive.css'

Vue.config.productionTip = false

Vue.use(Plugin)

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
