<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div>
    <model></model>
    <h2>欢迎光临文具店</h2>
    <div>请选择文具</div>
  </div>
  <div>
    <button v-for="(item, index) in useTools" :key="index" @click="selectItemFun(index)">{{index}} : {{item}}</button>
  </div>
  <div>你选择了{{selectItem}}</div>
  <div>{{storeName}}</div>
  <button @click="onChangeAction">点击显示</button>

  <div>{{nowTime}}</div>
  <button @click="getTime">获取时间</button>
  <div>
    <Suspense>
      <template #default>
        <AsyncShow />
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense>
  </div>
  <div>
    <Suspense>
      <template #default>
        <GirlShow />
      </template>
      <template #fallback>
        loading...
      </template>
    </Suspense>
  </div>
  <div>
    <div v-if="loading">loading...</div>
    <img v-if="loaded" src="result.imgUrl" alt="">
  </div>
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
  onRenderTriggered,
  watch } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import { nowTime, getTime } from './hooks/useNowTime'
// import useUrlAxios from './hooks/useUrlAxios'
import model from './components/Model.vue'
import AsyncShow from './components/AsyncShow.vue'
import GirlShow from './components/GirlShow.vue'
interface DataProps {
  useTools: string[];
  selectItem: string;
  selectItemFun: (index: number) => void;
}
export default {
  name: 'App',
  components: {
    // HelloWorld
    model,
    AsyncShow,
    GirlShow
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
    const storeName = ref('')
    const onChangeAction = () => {
      storeName.value = '晨光文具店' + storeName.value
      document.title = storeName.value
    }
    // const nowTime = ref('')
    // const getTime = () => {
    //   const time = new Date()
    //   const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    //   const minite = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    //   const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    //   nowTime.value = hours + ':' + minite + ':' + seconds
    // }
    // watch(storeName, (newValue, oldValue) => {
    //   console.log(newValue, '=============')
    //   console.log(oldValue, '-------------')
    //   document.title = newValue
    // })
    // const {result, loading, loaded} = useUrlAxios('https://apiblog.jspang.com/default/getGirl')
    
    watch([storeName, () => data.selectItem], (newValue, oldValue) => {
      console.log('newValue------', newValue)
      console.log('oldValue-------', oldValue)
    })
    return {
      ...refData,
      storeName,
      onChangeAction,
      nowTime,
      getTime,
      // result,
      // loading,
      // loaded
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
