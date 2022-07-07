import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/fonts/iconfont.css"
Vue.config.productionTip = false
    // 全局自定义自动聚焦事件
Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})
new Vue({
    render: h => h(App),
}).$mount('#app')