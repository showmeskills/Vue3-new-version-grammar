import {MutationTree} from 'vuex';
import {UserState} from './types'

export const mutations:MutationTree<UserState> ={
    handleChange:(state,payload)=> state.username = payload
    
}