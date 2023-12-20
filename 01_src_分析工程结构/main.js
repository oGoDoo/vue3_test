//引入的不在是Vue构造函数了
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象 --app，（类似于之前vue2中的vm，但app比vm“更轻”）
const app = createApp(App);
console.log('@@',app)

//挂载
app.mount('#app');

/* setTimeout(() => {
    app.unmount('#app')
}, 1000); */

/* const vm = new VueElement({
    render:h => h(app)
})
vm.$mount('#app') */
