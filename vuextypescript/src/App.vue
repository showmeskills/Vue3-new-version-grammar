<template>
  <div class="app">
    <h1>Todo list demo in vuex Typescript</h1>
    <TodoHeader/>
    <TodoFooter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoFooter from '@/components/TodoFooter.vue';
import TodoHeader from "@/components/TodoHeader.vue";
export default defineComponent({
  name: 'App',
  components: {TodoFooter,TodoHeader}
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
