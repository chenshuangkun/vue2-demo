export default {
  namespaced: true,
  state: {
    navList: [{
      title: '首页',
      path: '/',
      id: 0
    },
    {
      title: '拖拽',
      path: '/tuozhuai',
      id: 1
    },
    {
      title: 'table',
      path: '/table',
      id: 2
    }],
    currentId: 0
  },
  getters: {
  },
  mutations: {
    changeCurrentId(state, params) {
      state.currentId = params
    }
  },
  actions: {
  },
}