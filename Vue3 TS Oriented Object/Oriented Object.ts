(()=>{
    
    //customized an interface to restain the type of UserCRUD 
    interface IBasicUser<TYPE>{
        data:Array<TYPE>;
        addUser:(type:TYPE)=>TYPE
        getUser:(id:number)=>TYPE
        deleteUser:(name:string)=>string
        updateUser:(id:number,newName:string,newAge:number)=>TYPE

    }

    class User{
        id?:number;
        name:string;
        age:number;
        constructor(name:string, age:number){
            this.name = name;
            this.age = age;
        }
    }
    //defination a class to realise functions e.g create,update,read,delete
    class UserCRUD implements IBasicUser<User>{
        data:Array<User>=[];
        addUser(user:User):User{
            user.id = Date.now() + Math.random()
            this.data.push(user);
            return user;
        }
        getUser(id:number):User{
            return this.data.find(user=>user.id === id)
        }
        deleteUser(name:string):string{
            let idx:number =this.data.findIndex(user=>user.name === name)
            let user = this.data.splice(idx,1)
            return `${user[name]} has been deleted successfully `
        }
        updateUser(id:number,newName:string,newAge:number):User{
            if(this.data.find(user=>user.id === id)){
                this.data[id].name = newName;
                this.data[id].age = newAge;
            }
            return this.data[id]
        }
    }
})()