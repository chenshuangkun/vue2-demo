export default {
  namespaced: true,
  state: {
    tuozhuaiList: [1, 2, 34, 4, 54, 5]
  },
  getters: {
  },
  mutations: {
    changeTuozhuaiList(state, params) {
      state.tuozhuaiList = params
    }
  },
  actions: {
  },
}