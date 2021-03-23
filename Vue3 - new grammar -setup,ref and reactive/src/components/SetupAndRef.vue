<template>
    <div class="setup">
        <ul>
            <li>
                <p>Setup and Ref demo</p>
                <p>{{count}}</p>
                <p>
                    <button @click="addCount">add count</button>
                </p>
                <p>
                    <input type="text" v-model='anything'>
                    {{anything}}
                </p>
                <p>
                    <input type="checkbox" :value="checkBox" v-model='isChecked'>
                    {{checkBox[0]}}   {{isChecked}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent,ref,reactive } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0);
        const addCount = ()=>count.value++;
        const anything = ref();
        const checkBox = reactive(['swimming'])
        const isChecked=ref(true)
        return{
            count,
            addCount,
            anything,
            isChecked,
            checkBox
        }
    },
})
</script>
