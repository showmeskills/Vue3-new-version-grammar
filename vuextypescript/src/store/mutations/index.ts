import {State} from "../state";
import {Mutations,MutationsType} from './types';
import {MutationTree} from "vuex";

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