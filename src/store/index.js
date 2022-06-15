import Vue from 'vue'
import Vuex from 'vuex'
import navModule from './modules/navModule/navModule'
import tuoModule from './modules/tuoModule/tuoModule'
import tableModule from './modules/tableModule/tableModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    navModule,
    tuoModule,
    tableModule
  }
})
