<template>
  <div class="son">
    <h1>This is an son</h1>
  </div>
  <GranSon/>
</template>

<script>
import { defineComponent } from 'vue'
import GranSon from './GranSon'
export default defineComponent({
  components:{
    GranSon
  },
  setup() {
    
  },
})
</script>
