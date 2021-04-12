<template>
  <div class="app">
    <h1>ToDoList Demo</h1>
    
    <Input :addTodo="addTodo" />
    <!-- ...toRefs结构state可以直接获取里面的内容 -->
    <TodoList :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
    <BottomTool :todos="todos" :checkAll="checkAll" :clearAllCompletedTodos="clearAllCompletedTodos"/>
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive,toRefs, watch} from "vue";
import {Input,TodoList,BottomTool} from './components'
import {Todo} from "./typings"
import {saveTodos,readTodos} from './utils/localStorageUtils'
export default defineComponent({ 
  name: "App",
  components: {
    Input,
    TodoList,
    BottomTool
  },
  setup(){
    //范型定义接口 reactive(在一个对象里{todos[对象{}]}) =>泛型定义就是 <{todos : Todo[]}> Todo定的接口是个对象,加[] 就是数组对象[{}],
    // const state = reactive<{todos: Todo[]}>({
    //   todos:[
    //     {id:0,title:"coding",isCompleted:false},
    //     {id:1,title:"eating",isCompleted:false},
    //     {id:2,title:"fucking",isCompleted:false},
        
    //   ]
    // })
    
     const state = reactive<{todos: Todo[]}>({
      todos:[]
    })
    //界面家在完毕后过了一会再读取数据
    onMounted(()=>{
      setTimeout(()=>{
        state.todos = readTodos();
      },1000);
    })
    //添加数据的方法
    const addTodo = (todo: Todo)=>{
      state.todos.unshift(todo);
    }
    //删除数据
    const deleteTodo = (index: number)=>{
      state.todos.splice(index,1);
    }
    //修改todo的isCompleted
    const updateTodo = (todo :Todo, isCompleted:boolean)=>{
      todo.isCompleted = isCompleted
      // console.log(todo.isCompleted)
    }
    //全选或者全不选
    const checkAll = (isCompleted: boolean)=>{
      //遍历数组
      state.todos.forEach(todo=> todo.isCompleted = isCompleted)
    }
    //清除已经完成的任务
    const clearAllCompletedTodos = ()=>{
      state.todos = state.todos.filter(todo=>!todo.isCompleted)
    }
    //监视操作:如果todos数组的数据变化了,直接存储到浏览器的缓存中
    // watch(()=>state.todos,(value)=>{
    //   //保存到浏览器的缓存中
    //   localStorage.setItem('todos_key',JSON.stringify(value))
    // },{
    //   deep:true,
    // })

    // watch(()=>state.todos,(value)=>{
    //   //保存到浏览器的缓存中
    //   saveTodos(value);
    // },{
    //   deep:true,
    // })
    //优化:saveTodos和watch第二个回掉value的参数是一样的
    watch(()=>state.todos,saveTodos,{deep:true,})
    return{
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos
    }
  }
});
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border;
}
.app{
  width:300px;
  height:400px;
  border:1px solid #ccc;
  margin:auto;
}
</style>

