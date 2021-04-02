<template>
    <div>Reactive</div>
    <ul>
        <li>
            <p>name:{{user.name}}</p>
            <p>age:{{user.age}}</p>
            <p>job:{{user.job}}</p>
            <ul>
                <li>
                    wife:
                    <p>{{user.wife.name}}</p>
                    <p>{{user.wife.age}}</p>
                    <p>{{user.wife.cars}}</p>
                </li>
            </ul>
        </li>
    </ul>
    <button @click="updateUser">renew data</button>
</template>

<script>
import { defineComponent,reactive } from 'vue'

export default defineComponent({
    setup() {
        const obj = {
            name:'Terry',
            age:19,
            job:'web-developer',
            wife:{
                name:'Honny',
                age:20,
                cars:['Honda','Nissan']
            },
        }
        const user = reactive(obj)
        const updateUser= ()=>{
            if(user.isTrue){
                user.name = 'Terrance';
                user.age = 30;
            }
        }

        return{
            user,
            updateUser
        }
    },
})
</script>
