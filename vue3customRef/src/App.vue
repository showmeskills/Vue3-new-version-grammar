<template>
  <div id="nav">
    <h1>useDebounceRef</h1>
    <Dome/>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import Dome from './components/demo1'
export default defineComponent({
  components:{
    Dome
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
