import {ActionTree} from "vuex";
import {Actions,ActionsType} from './types';
import {State} from '../state';
import {MutationsType} from "../mutations/types";
const sleep = (ms:number) =>new Promise(resolve =>setTimeout(resolve,ms))
export const actions:ActionTree<State,State> & Actions = {
    async [ActionsType.GET_TODO_ITEMS]({commit}){
        commit(MutationsType.SET_LOADING,true);
        await sleep(1000)
        commit(MutationsType.SET_LOADING,false);
        commit(MutationsType.SET_ITEM,[])
    }
}


