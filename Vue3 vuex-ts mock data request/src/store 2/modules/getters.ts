import {GetterTree} from 'vuex';
import {RootState} from '../types';
import {UserState} from './types'



export const getters:GetterTree<UserState,RootState>={
    getUserInfo:(state):string=>  `username:${state.username}-email:${state.email}`,
    getUserName:(state):string=> state.username
}

