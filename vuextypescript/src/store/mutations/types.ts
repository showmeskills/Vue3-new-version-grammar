import {State,TodoItem} from "../state";
//定义常量
export enum MutationsType{
    CREATE_ITEM = "CREATE_ITEM",
    SET_ITEM = "SET_ITEM",
    COMPLETE_ITEM = "COMPLETE_ITEM",
    SET_LOADING = "SET_LOADING", 
}
//定义方法类型
export type Mutations = {
    [MutationsType.CREATE_ITEM](state:State,item:TodoItem):void
    [MutationsType.SET_ITEM](state:State,items:TodoItem[]):void
    [MutationsType.COMPLETE_ITEM](state:State,items:Partial<TodoItem> & {id:number}) :void
    [MutationsType.SET_LOADING](state:State,value:boolean):void
}
