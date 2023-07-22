class Random{
    // Constructor Method
    constructor(name, address, age){
        this.name = name;
        this.address = address;
        this.age = age;

    }
    // instance method
    askAddress() {
        console.log(`Hi ${this.name}. You live in ${this.address}, right?`)
    }

    // Computed Methods
    ['askAge'](){
        console.log(`And you are ${this.age} years old?`)
    }

    // Getter Method
    getName(){
        return this.name;
    }
    getAddress(){
       return this.address;

    }
    getAge(){
        return this.age;
    }
    // Setter Method
    setAge(newAge){
        this.age = newAge;
    }
    setAddress(newAddress){
        this.address = newAddress;
    }
}

// Create an object of random class
const obj1 = new Random("Mayank", "Haryana", 21);

// Accessing Properties using getter methods
console.log(obj1.getName());
console.log(obj1.getAge());
console.log(obj1.getAddress());

// Changing some properties using setter methods
obj1.setAge(23);
obj1.setAddress("Chandigarh");

console.log(obj1.getAge());
console.log(obj1.getAddress());

// Accessing properties using instance methods
obj1.askAddress();

// Accessing properties using computed methods
obj1.askAge();




// Static Method : These methods are associated with the class itself rather than with 
// instances (objects) of the class. These members are shared across all instances of the class 
// and can be accessed directly from the class 
class Factorial{
    constructor(){
    }

    // Static method to calculate the factorial of a number
    static fact(num){
        if(num===0 || num===1){
            return 1;
        }else {
            return num * this.fact(num-1);
        }
    }
}

console.log(Factorial.fact(8));
