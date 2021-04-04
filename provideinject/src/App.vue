<template>
  <div id="nav">
    <h1>provide and inject demo</h1>
    <p>current color:{{color}}</p>
    <button @click="changeColor('pink')">pink</button>
    <button @click="changeColor('red')">red</button>
    <button @click="changeColor('blue')">blue</button>
    <button @click="add('30px')">add font size</button>
    <button @click="minus('25px')">minus font size</button>
  </div>
  <Son/>
</template>
<script lang="ts">
import { defineComponent,ref,provide } from 'vue';
import Son from './views/Son.vue';
type ChangeColor = (col:string)=>void;
type Size = (s:string)=>void;
export default defineComponent({
  components:{
    Son
  },
  setup() {
    const color = ref<string>('pink');
    const changeColor:ChangeColor = (col)=>{
      color.value=col;
    }
    provide("color",color);

    const size = ref<string>('15px');
    const add:Size = (s)=>size.value=s;
    const minus:Size = (s)=>size.value =s ;
  
    provide("size",size);
    return{
      color,
      changeColor,
      add,
      minus
    }
  },
})
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
