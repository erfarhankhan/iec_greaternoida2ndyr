// 1. Primitive Types in JavaScript

// Primitive types are simple, immutable values stored directly in memory.
 
// Primitive Types

// Number   6
     
// String   hf

// Boolean     true

// Null

// Undefined

// BigInt

// Symbol

// Example:
let x = 10;     // number
let y = x;      // copied value
x = 20;

console.log(x); // 20
console.log(y); // 10


//  Primitive values are copied, NOT referenced.

//  2. Reference Types

// Reference types store values by reference, not by value.

// Reference Types

// Object

// Array

// Function

// Example:
let obj1 = { name: "raju" };
let obj2 = obj1;

obj1.name = "kaju";

console.log(obj1.name); // kaju
console.log(obj2.name); // kaju


// Both variables point to the same memory address.

//  Primitive vs Reference Type Conversion

// There is no true "conversion" between primitive and reference types,
// but JS lets primitive values behave like objects temporarily.

// Example:

let s = "hello";
console.log(s.toUpperCase()); // "HELLO"


//  JS wraps primitive string into a temporary String object → then removes it.
// This is called autoboxing.

//  3. Implicit Type Conversion (Automatic)

// JavaScript automatically converts types when needed.
// This is also called Type Coercion.

// ✔ Examples of Implicit Conversion
// 1. Number → String
// console.log("5" + 2); // "52"


// Why?
//  + operator with a string → converts the other value to string.

// 2. String → Number
console.log("5" - 2); // 3b
console.log("10" * 2); // 20
console.log("10" / 2); // 5


// Why?
//  -, *, / operators expect numbers → convert string to number.

// 3. Boolean to Number
console.log(true + 1);  // 2
console.log(false + 1); // 1

// 4. Falsy Conversions

// These convert to false:

// 0

// ""

// null

// undefined

// NaN

// Example:
if(null){
console.log("HI M FROM LINE NUMBER 112");// won't run

}else{
    console.log(" m running from 115");
    
}
if(""){ console.log("run")};  // won't run

//  4. Explicit Type Conversion (Manual)

// You convert types manually using JS functions.

// ✔ String → Number
console.log(Number("123")+ " NUMBER ");
;      // 123  
parseInt("123");    // 123
parseFloat("12.5"); // 12.5

// ✔ Number → String
String(100);      // "100" 
(100).toString(); // "100"

// ✔ Boolean Conversion
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hi"); // true

// ✔ Convert to Object (Explicit)

// Primitive → Object

let strObj = new String("hello");
console.log(typeof strObj); // object



console.log("20" + 2);



if(null){
    console.log("hello world line 154");
    
}