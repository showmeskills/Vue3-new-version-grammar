import { mutations } from './mutations';
import {actions} from './actions';
import {Module} from 'vuex';
import { RootState } from './../types';
import { UserState} from './types';
import { getters } from './getters';

const state:UserState = { 
    username: 'Terry',
    email: 'Terry@gmail.com',
    lastLogin: new Date(),
}

export const user:Module<UserState,RootState> = {
    state,
    getters,
    mutations,
    actions,
}
