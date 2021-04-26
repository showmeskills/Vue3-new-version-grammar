import {State} from './state';
import {GetterTree} from "vuex";
export type Getters = {
    completedCount(state:State):number;
    totalCount(state:State):number;
}

export const getters:GetterTree<State,State>&Getters = {
    completedCount:(state):number=>{
        return state.todoList.filter(item => item.completed).length
    },
    totalCount:(state)=>state.todoList.length
}