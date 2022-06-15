<template>
  <div class="nav">
    <div class="nav-item" :class="currentId == item.id ? 'nav-item-active' : ''" v-for="item in navlist"
      :key="item.title" @click="handleNavItem(item.id)">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
export default {
  data() {
    return {
      navlist: store.state.navModule.navList,
      currentId: store.state.navModule.currentId
    }
  },
  methods: {
    handleNavItem(id) {
      this.currentId = id
      store.commit('navModule/changeCurrentId', id)
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100px;
  display: flex;
  flex-direction: column;

  .nav-item {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    line-height: 1;
    text-align: center;

    a {
      text-decoration: none;
    }
  }

  .nav-item-active {
    background: goldenrod;
  }
}
</style>