import { createApp } from 'vue' // 引入vue文件，并导出 createApp
import App from './App.vue' // 引入自定义组件，你在页面上看的东西基本都在这个组件里

createApp(App).mount('#app') // 把App挂在到#app节点上，在public目录下的index.html找节点
