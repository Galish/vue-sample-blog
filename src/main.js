import Vue from 'vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.min.css'

import store from './store'

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
