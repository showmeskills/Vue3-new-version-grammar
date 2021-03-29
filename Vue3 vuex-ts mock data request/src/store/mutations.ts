import {MutationTree} from 'vuex';
import {MutationsType} from './mutations-type'
import {RootState,UserList} from './types'


const mutations:MutationTree<RootState> = {
    [MutationsType.INCREMENT]:(state)=>state.count++,
    [MutationsType.DECREMENT]:(state)=>state.count--,
    [MutationsType.MUTATION_USER_LIST]:(state,payload:Array<UserList>)=>{
        state.userList = payload
    }
}
export default mutations