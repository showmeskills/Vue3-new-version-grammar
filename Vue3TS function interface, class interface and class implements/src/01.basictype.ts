//基础类型
(()=>{
    //语法 let 变量:类型 = 值;
    //boolean
    let flag:boolean = true;
    console.log(flag);
    // number
    let a:number = 10;
    let a2:number = 0b1010;
    console.log(a, a2);
    // string
    let name:string = 'terrance';
    console.log(name)
    //str + num;
    let str:string = '134';
    let num:number = 555;
    console.log(`${str}+${num}`);
    //总结:ts中变量一开始是什么类型,那么后期赋值的时候,只能用这个类型,是不允许用其它类型的数据赋值给当前的这个变量中
    console.log('===================================================')
    //undefined 和 null 都可以作为其它类型的子类型,把undefined和null赋值给其它类型的变量,如:number类型的变量
    let und:undefined = undefined;
    let nll:null = null;
    let num2:number = undefined;
    let num3:number = null;
    console.log(num2)
    console.log(num3)
    console.log('===================================================')
    //array
    //语法:let 变量:数据类型[] = [值1,值2,值3]
    let arr1:number[]=[1,2,3,4,5,6,];
    //泛类型
    //语法: let 变量名:Array<数据类型>=[值1,值2,值3]
    let arr2:Array<number|string|boolean>=[1,2,3,4,5,6,'terry',true];
    //注意问题:数组定义后,里面的数据的类型必须和定义数组的时候的类型是一致的,否则有错误提示信息,也不会编译通过的
    //tuple(元组类型):在定义数组的时候,类型和数据的个数一开就就已经限定了(数据的类型的位置和数据的个数,应该和在定义元组的时候的数据类型及位置应该是一致的)
    let arr3:[string,number,boolean] = ['小甜甜',10,true];


    //枚举类型,枚举里面每个数据值可以叫元素,每个元素都有自己的编号,编号是从0开始的,依次的递增1
    enum Color{
        red,
        green,
        blue
    }
    
    let color:Color = Color.red;
    console.log(Color.red,Color.green,Color.blue)//输出就是0,1,2
    console.log(Color[2]);//blue

    enum Gender{
        //枚举中的元素可以是中文的数据值,但是不推荐
        male,
        famle
    }

    console.log(Gender.male)//0


    //any
    let str1:any = 100;
    str1 = '这个是string';
    //当一个数组中要存多个数据,个数不确定,类型不确定,此时也可以使用any类型来定义数组
    let arrAny: any[]=[100,'string',true];
    //这种情况下也没错误的提示信息,any类型有点
   //console.log(arrAny[0].split()) =>编译不提示报错



   //void 类型
   //在函数声明的时候():void 代表该函数没有任何返回值(只返回null/undefined)
   function showMsg():void{
     console.log('只要富婆把握住');;
       return 
   }
   console.log(showMsg())
   //定义void类型的变量,可以接收一个undefined到的只,但是意义不是很大
   let vd:void =undefined;
   console.log(vd)
   console.log('===================================================')

   //object 对象类型
   //定义一个函数,参数是object类型,返回值也是object类型
   function getObject(obj:object):object{
       console.log(obj);
       return{
           name:'卡卡西',
           age:27, 
       }
   }
   console.log(getObject({
       name:'佐助',
       age:'男'
   }))
   console.log(new String('123'))
   console.log(String)

   //联合类型(Union Types) 表示取值可以为多种类型中的一种
   //需求1:定义一个函数的得到一个数字或字符串值的字符串形式值
   function getString(str:number | string):string{
        return str.toString();
   }
   console.log(getString(1111))
   //需求2:定义一个函数得到一个数字或字符串的长度
   function getStr(str:number|string):number{
       // return length.toString().length;
      //如果length本身就是string类型,那么就没有必要调用toString方法
      if((<string>str).length){
        return (str as string).length
      }else{
        return str.toString().length;
      }
   }
   console.log(getStr(1234567))
   console.log('===================================================')
   //类型推断
//    let txt = 100;
//    txt = '11111'
//    console.log(txt)
//    let txt2 
//    txt2 = 111;
//    txt2 = '11111'
})();