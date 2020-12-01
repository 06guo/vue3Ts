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
import { 
  ref, 
  reactive, 
  toRefs, 
  onMounted, 
  onBeforeMount, 
  onUpdated, 
  onBeforeUpdate,
  onRenderTracked,
  onRenderTriggered } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
interface DataProps {
  useTools: string[];
  selectItem: string;
  selectItemFun: (index: number) => void;
}
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup() {
    console.log('开始创建组件-----setup()');
    
    // const useTools = ref(['铅笔', '橡皮', '尺子'])
    // const selectItem = ref('')
    // const selectItemFun = (index: number) => {
    //   selectItem.value = useTools.value[index]
    // }
    // return {
    //   useTools,
    //   selectItem,
    //   selectItemFun
    // }
    onBeforeMount (() => {
      console.log('组件挂载到页面之前执行----------onBeforeMount')
      
    })
    onMounted (() => {
      console.log('组件挂载到页面后执行--------------onMounted')
    })
    onBeforeUpdate (() => {
      console.log('组件更新之前----------------------onBeforeUpdate')
    })
    onUpdated (() => {
      console.log('组件更新之后-----------------------onUpdated')
      
    })
    onRenderTracked ((event) => {
      console.log(event, 'onRenderTracked-------------------');
      
    })
    onRenderTriggered ((event) => {
      console.log(event, 'onRenderTriggered-----------------------');
      
    })
    const data: DataProps = reactive({
      useTools: ['铅笔', '橡皮', '尺子'],
      selectItem: '',
      selectItemFun: (index: number) => {
        data.selectItem = data.useTools[index]
      }
    })
    const refData = toRefs(data)
    return {
      ...refData,
    }
  },
  beforeCreate () {
    console.log('beforeCreate');
  },
  beforeMount () {
    console.log('beforeMount'); 
  },
  mounted () {
    console.log('mounted');
  },
  beforeUpdate () {
    console.log('beforeUpdate');
  },
  updated () {
    console.log('updated');
    
  }
};
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
