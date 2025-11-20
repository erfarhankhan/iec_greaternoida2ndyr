//2. Spread (...) and Rest Operator in Objects

// These look the same (...) but are used differently.

// Spread Operator with Objects

// Used when you want to copy or merge objects.

// Works in object literals to “spread” key-value pairs from one object into another.
/*
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

const clone = { ...obj1 };
console.log(clone); // { a: 1, b: 2 }

*/



// Rest Operator in Object Destructuring
 

/*
const user1 = { name: "Ravi", age: 25, city: "Noida", email: "ravi@mail.com" };

const { name1, ...otherInfo1 } = user1;
console.log(name1);       // Ravi
console.log(otherInfo1);  // { age: 25, city: "Noida", email: "ravi@mail.com" }
*/

// 3. Object.keys, Object.values, Object.entries



// Returns an array of property names (keys) of the object.
/*
const user2 = { name: "Asha", age: 28, city: "Gzb" };
console.log(Object.keys(user2));  
// ["name", "age", "city"] :contentReference[oaicite:3]{index=3}
*/


// Returns an array of property values of the object.

const user3 = { name: "Asha", age: 28, city: "Gzb" };
console.log(Object.values(user3));  
// ["Asha", 28, "Gzb"] :contentReference[oaicite:4]{index=4}

const user = { name: "Asha", age: 28 };

// entries → [ ["name", "Asha"], ["age", 28] ]
console.log(Object.entries(user));  
// [["name", "Asha"], ["age", 28]] :contentReference[oaicite:5]{index=5}

// You can loop using destructuring:
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
// name Asha
// age 28

// 4. Practical Use-cases (Putting It All Together)

const product = {
  id: 101,
  name: "Laptop",
  price: 75000,
  discount: 5000,
  category: "Electronics"
};

// Extract some fields, rest go to otherDetails
// const { id, name, ...otherDetails } = product;
console.log(id, name);        // 101 Laptop
console.log(otherDetails);    // { price: 75000, discount: 5000, category: 'Electronics' }

// Create a new object with a modified price using spread
const discountedProduct = { ...product, price: product.price - product.discount };
console.log(discountedProduct);

// Iterate keys and values of product:
Object.entries(product).forEach(([key, value]) => {
  console.log(`${key} = ${value}`);
});