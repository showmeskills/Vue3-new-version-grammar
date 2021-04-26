import { ActionContext, ActionTree } from "vuex";
import { Mutations, MutationsType } from "./mutations";
import { State } from "./state";

export enum ActionsType{
    GET_TODO_ITEMS = "GET_TODO_ITEMS"
}

type ActionsArgs = Omit<ActionContext<State,State>,"commit">&{
    commit<K extends keyof Mutations>(
        key:K,
        payload:Parameters<Mutations[K]>[1]
    ):ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionsType.GET_TODO_ITEMS](context:ActionsArgs):void
}

const sleep = (ms:number) =>new Promise(resolve =>setTimeout(resolve,ms))

export const actions:ActionTree<State,State> & Actions = {
    async [ActionsType.GET_TODO_ITEMS]({commit}){
        commit(MutationsType.SET_LOADING,true);
        await sleep(1000)
        commit(MutationsType.SET_LOADING,false);
        commit(MutationsType.SET_ITEM,[])
    }
}