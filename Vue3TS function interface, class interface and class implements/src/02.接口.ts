//接口是对象的状态(属性)和行为(方法)的抽象(描述)
//接口:是一种类型,是一种规范,是一个能力,是一种约束

//定义一个接口,该接口作为person对象的使用,即定或者越是该对象中的属性数据
interface IPerson{
    //设置属性为只读属性(不可以修改);id是只读的number类型
    readonly id:number
    name:string
    age:number
    //?可有可无的
    sex?:string
}
//定义对象,该对象的类型就是我定义的接口
const person:IPerson = {
    id:1,
    name:'小甜甜',
    age:18,
}
console.log(person);
person.sex='女';

//案例2

interface Terry{
    readonly id:number,
    name:string,
    age?:number,
    sex:string,
}

function terry(person:Terry){
   return 'hello,' + person.name  
}
let user = {
    id:0,
    name:'Terry',
    sex:'男'
}
console.log(terry(user));