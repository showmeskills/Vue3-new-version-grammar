<template>
    <input type="text" placeholder="输入相关任务" v-model="title" @keyup.enter="add(title)"/>
</template>

<script lang="ts">
import { Todo } from '@/typings';
import { defineComponent,ref} from 'vue'

export default defineComponent({
    props:{
        addTodo:{
            type:Function,
            required:true,
        }
    },
    setup(props) {
        const title = ref<string>('');
        //回车的事件的回调函数,用来添加数据
        const add = (text : string)=>{
            //获取文本框中获取的数据并且不为空
            if(!text.trim()) return;
            //此时有数据,创建一个todo对象
            const todo: Todo = {
                id:Date.now(),
                title:text,
                isCompleted:false
            }
            //调用方法addTodo的方法
            props.addTodo(todo)
            //清空文本框
            title.value = '';
        }
        return{
            add,
            title
        }
    },
})
</script>
