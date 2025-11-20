// Here is a clear, simple, exam-friendly explanation of
// ✔ Arrow Function
// ✔ Lexical Scope
// ✔ Global Scope
// ✔ Local Scope
// ✔ Hoisting
// all with JavaScript examples.

// 🌟 1. Arrow Function (ES6)

// Arrow functions are shorter & modern ways to write functions.

// ✔ Syntax
const functionName = (parameters) => {
  // code
};

// ✔ Example (normal arrow function)
const add = (a, b) => {
  return a + b;
};

// console.log(add(5, 10)); // 15

// ✔ Short Arrow Function (implicit return)
// const multiply = (a, b) => a * b;

// ✔ Arrow Function with one parameter
// const square = x => x * x;

// ❗ Important: Arrow functions do NOT have their own this

// Example:
let name = "hf ";
const obj = {
    name: "Farhan",
    show: function (){
        console.log("name " + name);
        
    }
};

// obj.show();


// Arrow functions take this from parent scope → called lexical this.

// 🌟 2. Scope in JavaScript

// Scope = where a variable is accessible.

// ⭐ Global Scope

// A variable declared outside any function or block.

// ✔ Example
let x = 10;  // global scope

function test() {
    console.log(x); // can access
}

// test();


// Available everywhere.

// ⭐ Local Scope (Function Scope)

// Variable declared inside a function.

// ✔ Example
function show() {
    let y = 20;
    console.log(y); // works
}

// show();
// console.log(y); // ❌ Error: y is not defined


// Available only inside the function.

// ⭐ Block Scope (let & const)

// Variables declared inside { }.

// ✔ Example
{
    let a = 5;
    const b = 10;
}

// console.log(a); // ❌ Error
// console.log(b); // ❌ Error


// let and const are block scoped,
// var is NOT block scoped.

// 🌟 3. Lexical Scope

// Lexical = parent scope.

// A function can access variables from its outer (parent) function.

// ✔ Example
function outer() {
    let name = "raj";

    function inner() {
        console.log(name); // inner can access outer variables
    }

    inner();
}

// outer();


// Inner functions can use parent variables.
// Arrow functions also follow lexical scoping for this.

//  4. Hoisting

// JavaScript moves declarations to the top before execution.

// ✔ Var hoisting example:
// console.log(a); // undefined
var a = 10;


// var is hoisted but value is not.

// ✔ Function hoisting
greet();  // Works

function greet() {
    console.log("Hello!");
}
// console.log(a);
// let a = 9;

// Function declarations are fully hoisted.

// ❗ Let & const hoisting (Temporal Dead Zone)
// console.log(x); // ❌ Error
// let x = 5;




let student ={
    name:"hf ",
    age:25,

}


let raj = "from 160";

function outers(){
    let raj  = " m from line 163 "
    function innerfun_one(){
        let raj = " from  165"
        console.log("hi  from innerfun_One "+ raj);
        
    }

    function innerfun_two(){
        console.log("m from innerfun_Two "+ raj);
        
    }
    innerfun_one();
}
outers();