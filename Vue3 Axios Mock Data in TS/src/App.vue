<template>
  <div id="app">
    <div>request mock data from 'http://jsonplaceholder.typicode.com/users'</div>
    <div v-if='loading'>
      数据加载中....
    </div>
    <div v-else-if='errorMsg'>
      {{errorMsg}}
    </div>
    <ul v-else>
      <li v-for="details in data" :key=details.id>
        {{details.username}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useRequest from './hooks/axios';
import {Data} from './typings'
export default defineComponent({
  setup() {
      const {loading,data,errorMsg} = useRequest<Data[]>('http://jsonplaceholder.typicode.com/users')
      console.log(data)
      watch(data,()=>{
        if(data.value){
          console.log(data.value.length)
        }
      })
    return{
      loading,
      data,
      errorMsg
    }
  },
})
</script>


