import { RootState } from './../types';
import { UserState } from './types';
import {ActionTree} from 'vuex'


export const actions:ActionTree<UserState,RootState> = {
    actionChange:({commit})=>{
        setTimeout(()=>{
            commit('handleChange','Terance in actions')
        },1000)
    }
}