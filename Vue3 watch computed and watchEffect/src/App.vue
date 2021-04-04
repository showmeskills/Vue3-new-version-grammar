<template>
  <div id="nav">
    <div>
        <p>name</p>
        firstName:<input type="text" placeholder="enter your first name" v-model='user.firstName'/>
        <br/>
        lastName:<input type="text" placeholder="enter your last name" v-model='user.lastName'/>
    </div>
    <div>
      <p>computed</p>
        fullName(getters):<input type="text" placeholder="enter fullName" v-model="fullName"/>
         <br/>
        fullName(getters and setters):<input type="text" placeholder="enter fullName" v-model="fullName1"/>
      <p>watch</p>
        fullName(watch):<input type="text" placeholder="enter fullName" v-model="fullName2"/>
         <br/>
        fullName(watchEffect):<input type="text" placeholder="enter fullName" v-model="fullName2"/>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent ,reactive,computed,ref,watch,watchEffect } from 'vue'

export default defineComponent({
  setup() {
    const user = reactive({
      firstName:'Terrance',
      lastName:'YAN'
    })
    const fullName = computed(()=>{
      return user.firstName + '_'+user.lastName
    })
    const fullName1 = computed({
      get(){
        return user.firstName + '_'+user.lastName
      },
      set(value: string){
        const name = value.split('_')
        user.firstName = name[0];
        user.lastName = name[1];
      }
    })

    const fullName2 = ref('')
    watch(user,({firstName,lastName})=>{
      fullName2.value = firstName + '_' + lastName
    },{
      immediate:true,
      deep:true,
    })
  
   watchEffect(()=>{
        fullName2.value = user.firstName + '_' + user.lastName
    })

      watchEffect(()=>{
        const name = fullName2.value.split('_');
        user.firstName = name[0];
        user.lastName = name[1];
      })
      watch([()=>user.firstName,()=>user.lastName],()=>{
        console.log('++++')
      })

    return{
      user,
      fullName,
      fullName1,
      fullName2
    }
  },
})
</script>




<style lang="less">


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
