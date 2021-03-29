<template>
  <div id="nav">
    {{HelloMessage}}
    <ul style='list-style: none'>
      <li>{{user.username}}</li>
      <li>{{user.email}}</li>
      <li>{{user.lastLogin}}</li>
    </ul>
   <button @click='handleChange("Terrance")'>点击</button>
   <br>
   <button @click='actionChange'>async renew</button>


   <div>
      <p>demo one</p>
      count:{{count}}
      <button @click='INCREMENT'>++</button>
      <button @click='DECREMENT'>--</button>
     <p>async request</p>
     <button @click='ACTION_INCREMENT'>async ++</button>
     <button @click='ACTION_DECREMENT'>async --</button>
   </div>

    <div>
      <p>demo two ajax request</p>
      <button @click='ACTION_USER_LIST'>request UserList</button>
      <ul>
        <li v-for="name in userList" :key='name.id'>{{name.name}}</li>
      </ul>
    </div>



  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

export default defineComponent({
  setup(props,{attrs,slots,emit}) {
    
  },
  methods:{
    ...mapMutations(['handleChange',"INCREMENT",'DECREMENT']),
    ...mapActions(['actionChange','ACTION_INCREMENT','ACTION_DECREMENT','ACTION_USER_LIST'])
  },
  computed:{
    ...mapState(['HelloMessage','user','count','userList']),
    ...mapGetters(['getUserInfo','getUserName']),

  }
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
