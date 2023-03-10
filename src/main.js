//入口文件
//引入的不再是Vue构造函数，引入的是一个名为creatApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建应用实例对象app(类似于之前Vue2中的vm,但app比vm更轻)
createApp(App).mount('#app')//挂载
