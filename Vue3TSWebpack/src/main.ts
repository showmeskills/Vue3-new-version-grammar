//definit demo function

(()=>{
    interface IPerson {
        firstName: string;
        lastName: string;
        fullName: string;
    }

    class Person{
        firstName: string;
        lastName: string;
        fullName: string;
        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = this.firstName+ " " +this.lastName
        }
        
        static showFullName(person: IPerson){
            return person.firstName + " " + person.lastName
        }

        showFullName(person: IPerson){
            return person.firstName + " " + person.lastName
        }
    }

    let person = new Person('Terry','YAN');
    document.write("new Person function==>",person.showFullName(person));
    document.write('-----')
    document.write("class Person fucntion",Person.showFullName(person));
})()