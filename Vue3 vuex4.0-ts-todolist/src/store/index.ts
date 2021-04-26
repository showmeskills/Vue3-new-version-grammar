import { createLogger,createStore, Store as VuexStore,CommitOptions,DispatchOptions,useStore as baseUseStore} from 'vuex'
import {State,state} from './state'
import {mutations,Mutations} from './mutations'
import {actions,Actions} from './actions'
import {getters,Getters} from './getters'
import {InjectionKey} from "vue";
export const key:InjectionKey<VuexStore<State>> = Symbol();

export function useStore(){
  return baseUseStore(key)
}


export type Store = Omit<
    VuexStore<State>, 
    "getters" | "commit" | "dispatch" 
    > & {
      commit<K extends keyof Mutations,P extends Parameters<Mutations[K]>[1]>(
        Key:K,
        payload:P,
        options?:CommitOptions
      ):ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key:K,
    payload?:Parameters<Actions[K]>[1],
    options?:DispatchOptions,
  ):ReturnType<Actions[K]>
} & {
  getters:{
    [K in keyof Getters]:ReturnType<Getters[K]>
  }
}

export const store =  createStore<State>({
  plugins:process.env.Node_ENV === "development"?[createLogger()] : [],
  state,
  mutations,
  actions,
  getters
})
