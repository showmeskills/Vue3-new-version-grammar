<template>
  <div>
      <p>click event</p>
      <hr>
      <input type="text" v-model="keyword"/> {{keyword}}
     
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {useDebounceRef} from './debounce';
export default defineComponent({
    setup(){
        const keyword = useDebounceRef('',500)
        return{
            keyword
        }
    }
})
</script>

<style>

</style>