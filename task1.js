//  Some JavaScript examples to practice different operators and the if-else statement:

// Arithmetic Operators
var number1 = 83;
var number2 = 67;


console.log(number1 + number2); // Addition
console.log(number1 - number2); // Subtraction
console.log(number1 * number2); // Multiplication
console.log(number1 / number2); // Division
console.log(number1 % number2); // Modulo
console.log(number1 ** number2); // Exponentiation
number1++;    // Increment Operator
number2--;     // Decrement Operator
console.log(number1);
console.log(number2);






// Logical Operators
let google  = true;
let facebook = false;
let github  = false;

// LOGICAL OR
// If user have only one of the credentials they can serve the website
if(google || facebook || github) {
    console.log("You can serve the website.")
} else {
    console.log("You are not allowed to serve the website")
}

// Logical AND
console.log(google && facebook && github);   // Output : False Because all of the conditions 
// should be true

// Logical NOT(!)
console.log(!github);   // Output : True







// COMPARISON OPERATORS
let a = 453;
let b = 786;

console.log(a > b);  // Greater than
console.log(a < b);  // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to
console.log(a === b); // Strict Equal to
console.log(a !== b); // Not equal to





// String Operators (Concatenation)
var x = "Mayank";
var y = 153;
var z = "Lakhina"

console.log(x + y);   //Output : Mayank153
console.log(x + z);   //Ouput : MayankLakhina



// IF ELSE STATEMENTS
var temperature = 35;

if(temperature > 30) {
    console.log("It's hot outside");
} else if(temperature < 30 && temperature > 20) {
    console.log("It's moderate outside");
}else {
    console.log("It's cold outside");
}


// TERNARY OPERATOR

let authenticated = false;

(authenticated) ? console.log("You can serve the website") : console.log("Not allowed")