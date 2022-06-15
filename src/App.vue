<template>
  <div class="app">
    <div>
      <Nav></Nav>
    </div>
    <div class="app-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav/nav.vue'
export default {
  components: {
    Nav,
  },
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  padding: 2px;
  padding-top: 30px;
  padding-left: 30px;
  box-sizing: border-box;
  display: flex;

  .app-view {
    margin-left: 20px;
    flex: 1;
  }
}
</style>