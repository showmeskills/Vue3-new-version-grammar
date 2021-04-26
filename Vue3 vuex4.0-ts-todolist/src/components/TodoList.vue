<template>
  <div class="todo-list">
      <TodoItem v-for="item in todoList" :key="item.id" v-bind="item"/>
  </div>
</template>

<script lang='ts'>
import TodoItem from "./TodoItem.vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import {Store,key} from "@/store/"
import {State} from "@/store/state";
export default defineComponent({
  components: {
    TodoItem,
  },
  setup() {
    const store = useStore(key);
    
    const todoList = computed(()=>{
        return store.state.todoList
    })
    
    return {
        todoList,
    };
  },
});
</script>
<style lang='scss' scoped>
</style>