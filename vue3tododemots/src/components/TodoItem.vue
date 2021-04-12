<template>
    <li @mouseenter="mouseHandler(true)" 
        @mouseleave="mouseHandler(false)"
        :style="{backgroundColor:bgColor,color:myColor}"
    >
        <input type="checkbox" v-model="isComplete"/>
        <span>{{todo.title}}</span>
        <button :class="isActive? 'active':''" @click="delTodo()">删除</button>
    </li>
</template>

<script lang="ts">
import { Todo } from '@/typings'
import { defineComponent,ref,computed,toRefs,toRef} from 'vue'

export default defineComponent({
    props:{
        //当引用已经定义的泛型数据,需要把再次引入
       todo:{
           type:Object as () => Todo,//函数返回的是Todo类型
           required:true,
       },
       deleteTodo:{
           type:Function,
           required: true
       },
       index:{
           type:Number,
           required: true
       },
       updateTodo:{
           type:Function,
           required: true
       }
    },
    setup(props) {
        const bgColor = ref<string>("white");
        const myColor = ref<string>("black");
        const isActive = ref<boolean>(true);
        //它是鼠标进入和离开的事件回调函数
        const mouseHandler = (flag :boolean)=>{
            if(flag){
                bgColor.value = 'pink';
                myColor.value = 'green';
                isActive.value = false;
            }else{
                bgColor.value = 'white';
                myColor.value = 'black';
                isActive.value = true;
            }
        }
        //删除数据的方法
        const delTodo =()=>{
            //提示
            if(window.confirm('确定要删除吗？')){
                props.deleteTodo(props.index);
            }
        }
        //判断是否完成 (使用计算属性判断父组件传过来的是值)
        //计算属性的方式--来让当前的复选框选中/不选中
        const isComplete = computed({
            get(){
                return props.todo.isCompleted
            },
            set(val){
                //todo对象中的isCompleted进行操作
                props.updateTodo(props.todo,val)
            }
        })

        return{
           mouseHandler,
           myColor,
           bgColor,
           isActive,
           delTodo,
           isComplete
        }
    },
})
</script>

<style scoped>
li{
    height:50px;
}
.active{
    display:none;
}
</style>
