import {toRefs, reactive} from 'vue';

interface State{
    username:string,
    age:number,
    job:string
}

 const useRefs = ()=>{
    const state:State = reactive({
        username:'Terrance',
        age:18,
        job:'web developer'
    })
    return{
        ...toRefs<State>(state),
    }
}
export default useRefs