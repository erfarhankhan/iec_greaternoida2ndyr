/*1. Object Literals

An object literal is the simplest way to create an object, using curly braces {} with key–value pairs.
 */
/* */
const person = {
  name: "Alice",
  age: 30,
  city: "Delhi",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

/*
Here, person is an object literal with properties name, age, city, and a method greet.

2. Property Access: Dot vs Bracket Notation
Dot Notation

Use dot notation when you know the property name (identifier) in advance:
 */
console.log(person.name); // "Alice"
person.age = 31;

// Bracket Notation

// Use bracket notation when the property name is dynamic (stored in a variable) or not a valid identifier (e.g., has spaces, or special characters)


const prop = "city";
console.log(person[prop]); // "Delhi"

person["country"] = "India"; // add a new property
console.log(person["country"]); // "India"


// Bracket notation is also needed if the key is not a valid JS identifier:

const obj = {
  "likes-birds": true
};
console.log(obj["likes-birds"]); // true

// 3. The this Keyword

// Inside an object method, this refers to the object itself — i.e., the object on which the method was called.

// You use this to refer to other properties of the same object.

// Example:

const person = {
  name: "Bob",
  age: 25,
  greet: function() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
  }
};

person.greet();  
// Output: "Hi, I'm Bob and I'm 25 years old."


// Be careful: this depends on how a function is called. If you extract the method and call it separately, this might not refer to the original object.

// 4. Adding Properties

// You can add new properties to an existing object easily:

const car = {
  make: "Toyota",
  model: "Camry"
};

// Add a new property
car.year = 2022;

// Or using bracket notation
car["color"] = "red";

console.log(car);
// { make: "Toyota", model: "Camry", year: 2022, color: "red" }


// You can also use Object.defineProperty for more control (e.g. to set property as non-enumerable, or to define getter / setter). 
// w3schools.com

// 5. Removing Properties

// To remove a property from an object, use the delete operator. 

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

delete car.year;

console.log(car);  
// { make: "Toyota", model: "Camry" } — `year` is removed


// Note: setting a property to undefined is not the same as deleting it — the key still exists. 
// kirupa.com

// 6. Practical Example Combining Everything

// Here is a combined example showing:

// Object literal

Access (dot + bracket)

// Method using this

// Adding and removing props

const user = {
  firstName: "Rahul",
  lastName: "Verma",
  isLoggedIn: false,
  
  login: function() {
    this.isLoggedIn = true;
    console.log(this.firstName + " has logged in.");
  },

  logout: function() {
    this.isLoggedIn = false;
    console.log(this.firstName + " has logged out.");
  }
};

// Access properties
console.log(user.firstName);            // Rahul
console.log(user["lastName"]);          // Verma

// Add a new property dynamically
user.age = 28;
console.log(user.age);                   // 28

// Delete a property
delete user.lastName;
console.log(user.lastName);              // undefined

// Call methods
user.login();                            // Rahul has logged in.
console.log(user.isLoggedIn);            // true
user.logout();                           // Rahul has logged out.
console.log(user.isLoggedIn);            // false