// Type Conversion
// 1. String to Number
var str = "450";
var num = Number(str);
console.log(num);  // Output: 450

// Another Approach

var str = "450";
var int = parseInt(str);
console.log(int);  // Output: 450

// 2. Number to String
var num = 999;
var str = String(num);
console.log(str);  // Output: "123"

// Another Approach
var int = 1000;
var str = int.toString();
console.log(str);  // Output: "1000"


// 3. Boolean to string

var bool = false;
var str = String(bool);
console.log(str);  // Output: "false"

// 4. String to Boolean
var bool = true;
var str = String(bool);
console.log(str);  // Output: "true"

// 5. Array to String
var arr = ["Mayank", 21, "Panipat"];
var str = arr.toString();
console.log(str);  // Output: "Mayank, 21, Panipat"

// 6. String to Array
var str = "1,2,3";
var arr = str.split(",");
console.log(arr);  // Output: [ "1", "2", "3" ]


// 7. Object to JSON
var obj = { name: "Mayank", age: 21 };
var json = JSON.stringify(obj);
console.log(json);  // Output: '{"name":"Mayank","age":21}'

// 8. JSON to Object
var json = '{"name":"Mayank","age":21}';
var obj = JSON.parse(json);
console.log(obj);  // Output: { name: "Mayank", age: 21 }








