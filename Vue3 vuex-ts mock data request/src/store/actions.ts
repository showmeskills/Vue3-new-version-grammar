import {ActionTree} from 'vuex';
import {ActionTypes} from './actions-type'
import {MutationsType} from './mutations-type'
import {RootState} from './types'
import {GetterState} from './types'
import axios from 'axios';
const actions:ActionTree<GetterState,RootState> =  {
    [ActionTypes.ACTION_INCREMENT]:({commit})=>{
        setTimeout(() =>{
            commit(MutationsType.INCREMENT)
        },1000)
    },
    [ActionTypes.ACTION_DECREMENT]:({commit})=>{
        setTimeout(() =>{
            commit(MutationsType.DECREMENT)
        },1000);
    },
    [ActionTypes.ACTION_USER_LIST]:({commit})=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(resp=>{
                if(resp.status === 200){
                    commit(MutationsType.MUTATION_USER_LIST,resp.data)
                }
            })
    }
}

export default actions