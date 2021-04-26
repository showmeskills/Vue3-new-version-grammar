//定义state 类型

export type TodoItem = {
    id:number,
    title:string,
    completed:boolean
}

export type State = {
    loading:boolean
    todoList:TodoItem[]
}

export const state:State = {
    loading:false,
    todoList:[]
}