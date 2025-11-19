//1. map

// Transforms each element of an array into something else and returns a new array.

const numbers = [1, 2, 3, 4, 5];

// Square each number
const squared = numbers.map(n => n * n);

console.log(squared); // [1, 4, 9, 16, 25]
console.log(numbers); // original array is unchanged → [1, 2, 3, 4, 5]


// Use case: Converting an array of objects into another array — maybe extracting a field:

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']
/*
2. filter

Returns a new array containing only those elements that satisfy a condition (predicate).
*/
const numbers = [1, 2, 3, 4, 5];

// Get only even numbers
const evens = numbers.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]


// Use case: Filtering objects based on a property.

const students = [
  { name: 'Dave', score: 75 },
  { name: 'Eva', score: 90 },
  { name: 'Frank', score: 60 },
];

const passed = students.filter(student => student.score >= 70);
console.log(passed);
// [{ name: 'Dave', score: 75 }, { name: 'Eva', score: 90 }]

/* 3. reduce

Reduces the array to a single value (or object) by applying a function that accumulates a result.
*/
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 15


// Use case: Counting occurrences of items in an array:

const pets = ['dog', 'cat', 'dog', 'rabbit', 'cat'];

const count = pets.reduce((acc, pet) => {
  // If pet already seen, increment count, else set to 1
  acc[pet] = (acc[pet] || 0) + 1;
  return acc;
}, {});

console.log(count); 
// { dog: 2, cat: 2, rabbit: 1 }

//4. find

// Returns the first element in the array that satisfies a condition. If nothing matches, it returns undefined.

const numbers = [5, 12, 8, 130, 44];

// Find first number greater than 10
const found = numbers.find(n => n > 10);

console.log(found); // 12


// Use case: Finding an object in a list based on a property.

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }

/*5. some

Checks whether at least one element in the array satisfies a condition. Returns true or false.
*/
const numbers = [1, 3, 5, 7, 8];

// Is there any even number?
const hasEven = numbers.some(n => n % 2 === 0);

console.log(hasEven); // true (because 8 is even)


// Use case: Checking validation or presence of a condition.

const users = [
  { name: 'Anna', active: false },
  { name: 'Brian', active: false },
  { name: 'Cara', active: true },
];

const anyActive = users.some(u => u.active);
console.log(anyActive); // true (at least one user is active)

/*6. every

Checks whether all elements in the array satisfy a condition. Returns true or false.
*/
const nums = [2, 4, 6, 8];

// Check if all are even
const allEven = nums.every(n => n % 2 === 0);

console.log(allEven); // true


// Use case: Validating that all items meet a certain criteria.

const grades = [70, 85, 90, 78];

const allPassed = grades.every(score => score >= 50);
console.log(allPassed); // true (assuming 50 is passing mark)

/*7. Combining / Chaining Methods

Often these methods are chained to do more complex transformations concisely. For example:
*/
const numbers = [1, 2, 3, 4, 5, 6];

// 1. Filter even numbers, 2. Square them, 3. Sum them
const result = numbers
  .filter(n => n % 2 === 0)      // [2, 4, 6]
  .map(n => n * n)               // [4, 16, 36]
  .reduce((sum, n) => sum + n, 0); // sum = 56

console.log(result); // 56