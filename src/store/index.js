//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

const LoginStore = {
    namespaced: true,//开启命名空间
    state: { zIndex: 1 },
    mutations: {
        zIndexChange(state) {
            state.zIndex = 0.1
        }
    },
    actions: {},
}

//创建并暴露store
export default new Vuex.Store({
    modules: {
        LoginStore,
    }
})