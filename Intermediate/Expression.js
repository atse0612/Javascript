// two ways to create a class

class Person{
    constructor(name, birthYear, gender){
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;

 //ES6
//calcAge(){
//    console.log(new Date().getFullYear() - this.birthYear);
//}

    Person.prototype.calcAge = function(){
        console.log(new Date().getFullYear() - this.birthYear);
    }
    }
}

Person.prototype.greet = function(){
    console.log("Good morning" +this.name);
}

let john = new Person('John', 1990, 'Male');
john.calcAge();
john.greet();
console.log('john');

let merry = new Person('Mary', 'Female', 1990);
console.log('merry');

//1. classes cannot be hoisted
//2. classes are first class citizen
//3. classes are executed in strict mode

// getter and sorter for encapsulation
//let john = {
//    name: 'John',
//    birthYear: 1990,
//    AnnualSalary: 12000,

//    get getName(){
//        return this.name;
//    }

//    set setName(val){
//        if(val.length , 4){
//          alert('Name should be at least 4 characters)
//         else{
//             this.password = val;    
//          }
//};
//    }
//}

//console.log(john.getName);
//john.setName = 'John Smith';
//console.log(john.getName);
//console.log(john.name);

let User = class{
    constructor(name, pswd, role){
        this.name = name;
        this.password = pswd;
        this.role = role;
    }
    set setName(val){
        if(val.length , 4){
            alert('Name should be at least 4 characters');
            else{
                this.password = val;    
    
}
        }
    }
}