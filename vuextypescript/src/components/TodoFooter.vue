<template>
    <div class="todo-footer">
        <span>已经完成{{completedCount}}/当前任务数量{{totalCount}}</span>
    </div>
</template>

<script lang='ts'>
import {defineComponent,computed,reactive,toRefs} from 'vue';
import {useStore} from "vuex";
import {key} from "@/store";
export default defineComponent({
    name:"todo-footer",
    setup(){
        const store = useStore(key);
        const getters = reactive({
            completedCount:computed<number>(()=>store.getters.completedCount),
            totalCount:computed<number>(()=>store.getters.totalCount)
        })
        return{
            ...toRefs(getters)
        }
    },
})
</script>
<style lang='less' scoped>
 
</style>