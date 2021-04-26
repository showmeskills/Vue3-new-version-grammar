import {ActionContext} from "vuex";
import {Mutations} from '../mutations/types';
import {State} from '../state';
export enum ActionsType{
    GET_TODO_ITEMS = "GET_TODO_ITEMS"
}


type ActionArguments = Omit<ActionContext<State,State>,"commit" &{
    commit<K extends keyof Mutations>(
        key:K,
        payload:Parameters<Mutations[K]>[1]
    ):ReturnType<Mutations[K]>
}>




export type Actions = {
    [ActionsType.GET_TODO_ITEMS](context:ActionArguments):void
}