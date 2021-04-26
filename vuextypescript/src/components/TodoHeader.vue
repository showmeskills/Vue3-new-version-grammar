<template>
   <div class="todo-header">
       <input type="text" placeholder="pleace enter your task" v-model="todo">
       <button @click="addTodoItem">add task</button>
   </div>
</template>

<script lang='ts'>
import {defineComponent, ref} from 'vue';
import {useStore} from "vuex";
import {key} from "@/store";
import {MutationsType} from "@/store/mutations/types";
import {TodoItem} from "@/store/state";
export default defineComponent({
  setup(){
    const todo = ref<string>("");
    const store=useStore(key);
    const addTodoItem =():void=>{
      if(!todo.value){
        alert("It can\'t be empty!");
      }
      const item :TodoItem={
        id:Date.now(),
        title:todo.value,
        completed:false,
      }
      store.commit(MutationsType.SET_ITEM,item);
      todo.value = "";
    }
    return{
      todo,
      addTodoItem
    }
  },
})
</script>
<style lang='less' scoped>
 
</style>