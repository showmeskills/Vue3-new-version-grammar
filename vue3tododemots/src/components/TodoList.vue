<template>
    <ul>
        <TodoItem 
            v-for="(todo,index) in todos" :key="todo.id"
            :todo="todo"
            :deleteTodo="deleteTodo"
            :index="index"
            :updateTodo="updateTodo"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './TodoItem.vue';
export default defineComponent({
    components:{
        TodoItem
    },
    props:['todos',"deleteTodo","updateTodo"],
    setup:()=>{
        return{

        }
    },
})
</script>

<style scoped>
ul{
    list-style-type: none;
}
</style>
