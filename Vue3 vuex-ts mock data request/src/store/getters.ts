import {GetterTree} from 'vuex';
import {RootState} from './types'
import {GetterState} from './types'

 const getters:GetterTree<GetterState, RootState>={
    Count:(state)=>state.count,
    UserList:(state)=>state.userList
}

export default getters