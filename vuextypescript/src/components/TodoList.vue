<template>
   <div class="todo-list">
      <TodoItem v-for="item in todoList" :key="item.id" :title="item.title" :completed="item.completed"/>
   </div>
</template>

<script lang='ts'>
import {computed, defineComponent} from 'vue';
import TodoItem from './TodoItem.vue';
import {useStore} from "vuex";
import {key} from '@/store';
export default defineComponent({
  components:{TodoItem},
  setup(){
    const store = useStore(key);
    
    return{
      todoList:computed(()=>store.state.todoList)  
    }
  },
})
</script>
<style lang='less' scoped>
 
</style>