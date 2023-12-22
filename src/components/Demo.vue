<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">触发Demo组件的hello事件</button>
    <slot></slot>
</template>
  
<script>
import { reactive } from 'vue';
export default {
    name: 'Demo',
    props: ['msg', 'school'],
    emits:['hello'],
    setup: function (props, context, c) {
        // console.log('----setup----',props,context,c)
        // console.log('----setup----', context.attrs) //相当于Vue2中的$attrs
        // console.log('----setup----', context.slots) //相当于Vue2中的$slots
        // console.log('----setup----', context.emit) //触发自定义事件的

        //数据
        let person = reactive({
            name: '张三',
            age: 18,
        });

        function test() {
            context.emit('hello', '乔双龙yyds');
        }


        //返回一个对象（常用）
        return {
            person,
            test
        }
    },
}
</script>
  