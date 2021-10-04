import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "@/store/store";

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    store: store,
    render: h => h(App),
}).$mount('#app')
