//https://github.com/erfarhankhan/iec_greaternoida2ndyr


// 1. Object Destructuring

// Destructuring lets you extract properties from an object into variables easily.

const user = {
  name: "Amit",
  age: 30,
  city: "Delhi",
};

// Basic destructuring:
const { name, age } = user;
console.log(name, age); // Amit 30

// Rename variables while destructuring:
const { city: hometown } = user;
console.log(hometown); // Delhi

// Default value if property doesn't exist:
const { country = "India" } = user;
console.log(country); // India

// Nested destructuring:
const person = {
  name: "Meera",
  address: {
    street: "MG Road",
    zip: 201001
  }
};
const { address: { street, zip } } = person;
console.log(street, zip); // MG Road 201001


/////////////////////////////////////////////////////

