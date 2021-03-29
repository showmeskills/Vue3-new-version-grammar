<template>
  <h1>toRefs in vue3</h1>
  <ul>
    <li>
      <p>username:{{username}}</p>
      <p>age:{{age}}</p>
      <p>job:{{job}}</p>
    </li>
  </ul>
  <button @click="handleChange('Terry')">renew</button>
  <div>
    <h1>ref to request DOM element</h1>
    <input type="text" ref='myInput' v-model="enterInput"/>
    <input type="checkbox" v-model="checked" >{{checked}}
    {{enterInput}}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import useRefs from './hooks/useRefs'

type handleChange =(name:string)=>void

export default defineComponent({
  name: 'App',
  setup(){
    const {username,age,job} = useRefs();
    const handleChange:handleChange=(name)=>{
      username.value= name
    }
    const myInput = ref<HTMLElement | null>(null)
    const enterInput = ref<HTMLElement | null>(null)
    const checked = ref(false);
    onMounted(()=>{
     setInterval(()=>{
        age.value++
      },1000)
      myInput.value&&myInput.value.focus();
      checked.value = true;
    })
    onUnmounted(()=>{
      clearInterval(  
        setInterval(()=>{
        age.value++
      }))
    })
    return{
      username,
      age,
      job,
      handleChange,
      myInput,
      enterInput,
      checked
    }
  }
  
});
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>
