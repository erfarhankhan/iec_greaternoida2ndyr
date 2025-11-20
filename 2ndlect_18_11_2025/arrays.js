// 1. Array Creation

// You can create arrays in JS in various ways:

// Literal syntax (most common):
// let arr = [1, 2, 3, "hello"];

// Using Array constructor:
// let arr2 = new Array(5);         // creates an array of length 5, but empty slots  
// let arr3 = new Array(1, 2, 3);   // same as [1, 2, 3]

// Using Array.of / Array.from:
// let arr4 = Array.of(4, 5, 6);
// let arr5 = Array.from("abc");  // ["a", "b", "c"]

/////////////////////////////////////////

// 2. Indexing / Accessing Elements

// JavaScript arrays are zero-indexed: first element is arr[0], second is arr[1], and so on. 
// JavaScript.info
// +1

// You can read or write an element by its index:

// let arr = [10, 20, 30];
// console.log(arr[1]);  // 20
// arr[2] = 100;         // now arr = [10, 20, 100]


//////////////////////////////////////////////////////////////
// 3. Iteration (Looping Over Arrays)

// Some common ways to iterate over arrays:

// for loop:
// let arrays  = [1,2,3,4,5,6];
// for (let i = 0; i < arrays.length; i++) {
//   console.log("arrays " + arrays[i]);
// }


// for…of (ES6+):
// let arrays = [9,8,7,6,5];
// for (let i of arrays) {
//   console.log(i + " i");
// }

// for(let i =0;i<arr.length;i++){

// }
// forEach method:

// arr.forEach((value, index) => {
//   console.log(index, value);
// });
///////////////////////////////////////////////////////

 /* 4. Common Array Methods

Here are some of the most used array methods, with what they do:

Method	What It Does
push(...items)	Adds items to the end of the array. 
GeeksforGeeks
+1

pop()	Removes the last element and returns it. 


shift()	Removes the first element and returns it. 


unshift(...items)	Adds one or more items at the beginning of the array. 


splice(start, deleteCount, ...items)	At start index, removes deleteCount elements, and can insert new items there. Mutates the original array. 
JavaScript.info

slice(start, end)	Returns a shallow copy of a portion of the array, from start to end (not including end). Does not mutate.

*/

let arr = [1, 2, 3];
arr.push(4);  
console.log(arr + " arr");
            // arr = [1, 2, 3, 4]
arr.unshift(0);           // arr = [0, 1, 2, 3, 4]
console.log(arr + " arr");
// let last = arr.pop();     // last = 4, arr = [0, 1, 2, 3]
// let first = arr.shift();  // first = 0, arr = [1, 2, 3]

// let mid = arr.splice(1, 1, 10, 20);  
// removes 1 element at index 1, inserts 10 and 20  
// arr = [1, 10, 20, 3], mid = [2]

// let part = arr.slice(1, 3);  
// // part = [10, 20], arr is still [1, 10, 20, 3]

// arr.forEach((v,i) => console.log(i, v));
// prints:  
// 0 1  
// 1 10  
// 2 20  
// 3 3  
