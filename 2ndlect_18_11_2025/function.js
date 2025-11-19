// 1. Function Declaration

// (Also called normal function)

// ✔ Syntax
function functionName() {
    // code
}

// ✔ Example
function greet() {
    console.log("Hello raju!");
}
greet();

// 2. Function with Parameters

// (Values we pass inside the function)

// ✔ Example
function greet(name) {
    console.log("Hello " + name);
}

greet("hf");
greet("ravi");
// .///////////////////////////////////////////////////////

// Function with Return Value

// (Returns a value back)

// ✔ Example
function add(a, b) {
    return a + b;
}

let result = add(5, 10);
console.log(result);

////////////////////////////////////////////////////
// 4. Function Expression

// Function stored in a variable.

// ✔ Example
let sum = function(a, b) {
    return a + b;
};

console.log(sum(4, 6));

// ⭐ 5. Arrow Function (ES6)

// Short & modern way.

// ✔ Example
let multiply = (a, b) => a * b;

console.log(multiply(3, 4));  // 12

//  6. Anonymous Function

// Function without a name.

// ✔ Used inside setTimeout or event listeners:
setTimeout(function() {
    console.log("Anonymous Function Called");
}, 1000);
