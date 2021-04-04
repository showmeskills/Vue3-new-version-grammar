//类 类型:类的类型,类的类型可以通过接口来实现
(()=>{
    //定义一个接口
    interface IFly{
        //该方法没有任何的实现(方法中什么都没有)
        fly():string
    }
    //定义一个类,这个类的类型就上面定义的接口(实力上也可以理解为,IFly这个接口约束了当前的这个Person类)
    class Person implements IFly{

        //实现接口中的方法
        fly(){
            return '我会飞了,他妈的'
        }
    }
    const person = new Person();
    console.log(person.fly())


    interface ISwimming{
        swimming():string
    }
    //定义一个类,这个类的类型就是IFly和ISwimming(当前这个类可以实现多个接口,一个类可以同时被多个接口约束)
    class Sports implements IFly,ISwimming{
        swimming(){
            return '我会游泳了'
        }
        //实现接口中的方法
        fly(){
            return '我会飞了,他妈的'
        }
    }
    const sports = new Sports();
    console.log(sports.swimming());
    console.log(sports.fly());
    //总结 类可以通过接口的方式,来定义当前这个类的类型
    //类可以实现一个接口,类也额可以实现多个接口,要注意接口中的内容都要正真的实现




    //接口可以继承其他的多个接口;
    interface IFlyISwimming extends IFly,ISwimming{}

    class All implements IFlyISwimming{
        swimming(){
            return '我会游泳了'
        }
        //实现接口中的方法
        fly(){
            return '我会飞了,他妈的'
        }
    }
    const all = new All();
    //总结:接口和接口之间叫继承(extends)
    //接口和类之间叫实现(implements)
})()