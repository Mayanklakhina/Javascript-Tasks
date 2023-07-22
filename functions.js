// Regular functions
function multiply(x, y) {
    console.log(x*y);
}

multiply(3, 90);

// Function Expressions /Anonymous function
const func1 = function(a,b){
    return a+b;
}
console.log(func1(60,70));

// Arrow Functions
const func2 = (i, j)=>{
   return i - j;
}
console.log(func2(80, 45));

// IIFE
(function divide(a, b) {
    console.log(a/b);
})(45, 5);


// Callback function or first class functions
function random(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }

  
  
  function sayHello() {
    console.log("Hello!");
  }
  
random("Mayank", sayHello);
  

// Generator function
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const sequence = generateSequence();
  
  // Using the generator to get the next value
  console.log(sequence.next().value); 
  console.log(sequence.next().value); 
  console.log(sequence.next().value); 
  console.log(sequence.next().value); 
  