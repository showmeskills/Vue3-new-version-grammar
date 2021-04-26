<template>
   <div class="todo-item" :class="completed? 'action': 'non-action'">
       <input type="checkbox" @change="toggleCompletion">
       {{task}}
   </div>
</template>

<script lang='ts'>
import {defineComponent,onMounted} from 'vue';
import {useStore} from "vuex";
import {Store,key} from "@/store"
import { MutationsType } from '@/store/mutations';
export default defineComponent({
  name:"TodoItem",
  props:{
      id:{type:Number,required:true},
      task:{type:String,required:true},
      completed:{type:Boolean,required:true}
  },
  setup(props){
    onMounted(()=>{
        console.log("todo-item")
    })
    const {commit,dispatch,state} = useStore(key);
    const toggleCompletion = ()=>{
        commit(MutationsType.COMPLETE_ITEM,{
            id:props.id,
            completed:!props.completed
        })
    }
    return{
      toggleCompletion,
    }
  },
})
</script>
<style lang='scss' scoped>
 .action{
     border: 1px solid green;
 }
 .non-action{
     border: 1px solid white;
 }
</style>