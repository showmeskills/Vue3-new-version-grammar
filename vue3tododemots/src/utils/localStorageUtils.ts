
// //保存数据到浏览器的缓存中
// export function saveTodos(todos: Todo[]){
//     localStorage.setItem('todos', JSON.stringify(todos));
// }
// //从浏览器的缓存中读取数据
// export function readTodos(): Todo[]{
//     return JSON.parse(localStorage.getItem('todos') || '[]');
// }

import {Todo} from '../typings'
type ReadTodos=()=>Todo[];

const saveTodos =(todos: Todo[])=>{
    localStorage.setItem('todos', JSON.stringify(todos));
}

const readTodos: ReadTodos = ()=>{
    return JSON.parse(localStorage.getItem('todos') || '[]');
}

export {
    saveTodos,
    readTodos
}

