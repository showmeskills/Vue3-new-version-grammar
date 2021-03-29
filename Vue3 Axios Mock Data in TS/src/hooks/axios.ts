//axios
import axios from 'axios';
import {ref} from 'vue';

//发送ajax 请求
export default function<T> (url: string,){
    //加载状态
    const loading = ref(true);
    //请求成功的数据
    const data =ref<T | null>(null);
    //错误信息
    const errorMsg = ref<T | null | string>('');
    axios.get(url).then(response =>{
        loading.value = false;
        data.value = response.data;
    }).catch(err=>{
        loading.value = false;
        errorMsg.value = err.message || '未知错误';
    })
    return{
        loading,
        data,
        errorMsg,
    }
}