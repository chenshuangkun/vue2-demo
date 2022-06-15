<template>
  <div class="tuo-zhuai">
    <div class="tuo-zhuai-left">
      <vuedraggable class="wrapper" v-model="list">
        <transition-group>
          <div class="tuo-zhuai-left-item" v-for="item in list" :key="item">
            {{ item }}
          </div>
        </transition-group>
      </vuedraggable>
    </div>
    <div class="tuo-zhuai-right">
      <div class="tuo-zhuai-right-item" v-for="item in list" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable';
import store from '@/store/index'

export default {
  name: 'tuozhuai',
  components: { vuedraggable },
  props: {
  },
  data() {
    return {
      list: store.state.tuoModule.tuozhuaiList
    }
  },
  updated() {
    store.commit('tuoModule/changeTuozhuaiList', this.list)
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.tuo-zhuai {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tuo-zhuai-left,
  .wrapper {
    width: 200px;
    height: 500px;

    span {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }


    .tuo-zhuai-left-item {
      width: 50px;
      height: 50px;
      background: #42b983;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }

  .tuo-zhuai-right {
    flex: 1;
    height: 100%;
    padding-right: 30px;
    box-sizing: border-box;

    .tuo-zhuai-right-item {
      width: 100%;
      height: 100px;
      background: #42b983;
      margin-bottom: 20px;
    }
  }
}

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
}
</style>
