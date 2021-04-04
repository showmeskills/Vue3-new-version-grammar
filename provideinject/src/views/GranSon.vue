<template>
  <div class="GranSon">
    <h1 :style={color,fontSize}>this is a granSon component</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "GranSon",
  setup() {
    const color = inject("color");
    const fontSize = inject("size");
  
    return {
      color,
      fontSize    
    };
  },
});
</script>
