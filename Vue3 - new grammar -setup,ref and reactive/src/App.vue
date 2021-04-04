<template>
  <h1>Setup and Ref</h1>
  <Setup/>
  <Reactive/>
</template>

<script>
import { defineComponent } from 'vue';
import {Setup,Reactive} from './components'

export default defineComponent({
  name: 'App',
  components: {
   Setup,
   Reactive
  }
});
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
</style>
