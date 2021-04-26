<template>
   <div class="add-todo-item">
       <div>已经完成{{completedCount}}/总共多个{{totalCount}}</div>
       <input type="text" placeholder="需要添加一个任务" v-model="todo">
       <button @click="addTodoItem">添加任务</button>
   </div>
</template>

<script lang='ts'>
import {defineComponent,ref,toRefs,reactive,computed} from 'vue';
import {TodoItem} from '../store/state'
import {useStore,} from "vuex";
import { MutationsType } from '@/store/mutations';
import {store, Store,key} from "@/store/"
import {Getters} from '@/store/getters'
export default defineComponent({
  setup(){
    const todo = ref<string>('');
    const store = useStore(key);
    const get = ref<number>(store.getters.completedCount)
    const addTodoItem = ():void=>{
        if(!todo.value){
            return
        }
        const item:TodoItem = {
            id:Date.now(),
            task:todo.value,
            completed:false,
        }
        store.commit(MutationsType.CREATE_ITEM,item);
        todo.value = "";
    }
    store.getters
    return{
      addTodoItem,
      todo,
      completedCount:computed<Getters>(()=>store.getters.completedCount),
      totalCount:computed<Getters>(()=>store.getters.totalCount)
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>