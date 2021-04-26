import {GetterTree} from "vuex";
import {State} from '../state';
import {Getters} from './types';
export const getters:GetterTree<State,State> & Getters={
    completedCount:(state):number=>{
        return state.todoList.filter(item=>item.completed).length
    },
    totalCount:(state):number=>state.todoList.length
}