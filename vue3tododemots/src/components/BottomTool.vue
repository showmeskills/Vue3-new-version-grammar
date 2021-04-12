<template>
    <div>
        <input type="checkbox" v-model="isCheckAll"/>
        <span>已完成{{count}}/全部{{todos.length}}</span>
        <button @click="clearAllCompletedTodos">清除已经完成任务</button>
    </div>
</template>

<script lang="ts">
import { defineComponent,computed,toRefs } from 'vue';
import {Todo} from '@/typings'
export default defineComponent({
    props:{
        todos:{
            type:Array as ()=>Todo [],
            required: true
        },
        checkAll:{
            type:Function,
            required: true
        },
        clearAllCompletedTodos:{
            type:Function,
            required: true
        }
    },
    setup(props) {
        const {todos,checkAll}=toRefs(props);
        //已完成的计算属性操作
        const count = computed(()=>{
            return todos.value.reduce((pre,todo)=>pre+(todo.isCompleted? 1 : 0),0)
        })
        //watch(count,(value)=>count=value,{deep:true})
        //全选全不选
        const isCheckAll = computed({
            get(){
                return count.value>0&&todos.value.length === count.value
            },
            set(val){
                // console.log(val)
                checkAll.value(val); 
            }
        })
        return{
            count,
            isCheckAll
        }
    },
})
</script>
