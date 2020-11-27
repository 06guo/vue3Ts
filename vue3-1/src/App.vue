<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div>
    <h2>欢迎光临文具店</h2>
    <div>请选择文具</div>
  </div>
  <div>
    <button v-for="(item, index) in useTools" :key="index" @click="selectItemFun(index)">{{index}} : {{item}}</button>
  </div>
  <div>你选择了{{selectItem}}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    const useTools = ref(['铅笔', '橡皮', '尺子'])
    const selectItem = ref('')
    const selectItemFun = (index: number) => {
      selectItem.value = useTools.value[index]
    }
    return {
      useTools,
      selectItem,
      selectItemFun
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
