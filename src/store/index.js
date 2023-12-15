import Vue from 'vue'
import Vuex from 'vuex'

import navigation from "@/store/model/navigation"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navigation
    },
    // strict: debug,
    strict: false,
})