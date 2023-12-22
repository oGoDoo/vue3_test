<template>
  <Demo @hello="sayHelloMsg" msg="你好啊" school="二中" >
  <span>尚硅谷</span>
</Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function sayHelloMsg(msg) {
      alert(`我是hello事件的回调，我收到的参数是：${msg}`)
    }
    return {
      sayHelloMsg
    }
  }
}
</script>
