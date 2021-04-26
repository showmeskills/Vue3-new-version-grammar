import {customRef} from 'vue';

export const useDebounceRef = <T>(value:T,delay=500)=>customRef((track,trigger)=>{
    let timeOutId:number;
    return{
        get(){
            track();
            return value;
        },
        set(newValue:T){
            clearTimeout(timeOutId);
            timeOutId=setTimeout(()=>{
                value = newValue;
                trigger();
            },delay);
        }
    }
})