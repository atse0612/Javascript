// Constructor function for Person

let Person = function(name, gender, birthYear){
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
    this.calcAge = function(){
        let age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
}

// Proto property
Person.prototype.calcAge = function(){
    let age = new Date().getFullYear() - this.birthYear;
    console.log(age);
};

Person.prototype.city = "London"; // setting London as a city for an example


//Calling the values for the Person
let john = new Person('John', 'Male', 1990);
john.calcAge();
console.log(john);

//let now = new Date(); //getting current date
//let str = new String(); //new string 


let merry = new Person('Mary', 'Female', 1990);
merry.calcAge();
console.log(merry);

let steve = new Person('Steve', 'Male', 1989);
steve.calcAge();
console.log(steve);


//Object for Mark

let mark = {name: 'Mark', birthYear: 12, gender: 'Male'};

// Identifying the property

console.log(mark.hasOwnProperty('name'));






let arr = [10, 20, 30];
console.log(arr);
//new Array()
arr.push(); 
