import {State,TodoItem} from "./state";
import {MutationTree} from "vuex";

export enum MutationsType{
    CREATE_ITEM = "CREATE_ITEM",
    SET_ITEM = "SET_ITEM",
    COMPLETE_ITEM = "COMPLETE_ITEM",
    SET_LOADING = "SET_LOADING", 
}

export type Mutations = {
    [MutationsType.CREATE_ITEM](state:State,item:TodoItem):void
    [MutationsType.SET_ITEM](state:State,items:TodoItem[]):void
    [MutationsType.COMPLETE_ITEM](state:State,items:Partial<TodoItem> & {id:number}) :void
    [MutationsType.SET_LOADING](state:State,value:boolean):void
}

export const mutations:MutationTree<State> & Mutations={
    [MutationsType.CREATE_ITEM](state,item){
        state.todoList.unshift(item);
    },
    [MutationsType.SET_ITEM](state,items){
        state.todoList=items
    },
    [MutationsType.COMPLETE_ITEM](state,newItem){
        const item = state.todoList.findIndex(s=>s.id === newItem.id)
        if(item === -1){
            return
        }
        state.todoList[item] = {...state.todoList[item],...newItem};
    },
    [MutationsType.SET_LOADING](state,value){
        state.loading = value
    }
}