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
    // 再定义一个自定义指令来控制权限是否显示编辑功能
Vue.directive('isShow', {
    inserted(el, binding) {
        if (binding.value == 0) {
            el.style.display = 'none'
        } else {
            el.style.display = ''
        }
    },
    update(el, binding) {
        if (binding.value == 0) {
            el.style.display = 'none'
        } else {
            el.style.display = ''
        }
    },

})
new Vue({
    render: h => h(App),
}).$mount('#app')