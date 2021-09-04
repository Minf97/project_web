import Vue from 'vue'
import App from './App.vue'
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引用vuex使用
import store from './store'    // 自动解析 index.js
Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    // 安装事件全局总线，$bus就是vm
    Vue.prototype.$bus = this
  }
}).$mount('#app')
