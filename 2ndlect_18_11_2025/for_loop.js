// for (initialization; condition; increment) {
//     // code
// }
///////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 5; i++) {
//     // console.log(i);
// }
// for(let i = 1 ; i<5;i++){
//     console.log("i => "+ i);
    
// }

//////////////////////////////
// while (condition) {
//     // code\
//     // i++;
// }


// let i = 1;

// while (i <= 5) {
//     // console.log(i);
//     i++;
// }

////////////////////////////////
// 3. DO...WHILE LOOP

// Runs at least once, even if the condition is false.

// ✔ Syntax
// do {
//     // code
// } while (condition);
///////////////////////////////////////////////////
//  Example
// let i = 1;
// let i =9;
// do {
//     console.log(i);
//     i++;
// } while (i > 5);

// FOR...IN LOOP

// Used to iterate over object properties.

// ✔ Syntax
// for (let key in object) {
//     // code
// }

// ✔ Example
let student = {
    name: "hf",
    age: 22,
    city: "delhi",
    email:"hfkhan",
    mbl:829936
};
// console.log(student.name); //hf
// console.log(student.age); // 22;

// for(let i in student){
 
//     if (i === "email") {
//            console.log(i+" :" + student[i]); // email : hfkhan
//     }  
// }



// for(let i in student){
//     // console.log(i+" : "+student[i]);
//     if (i == "email" || i == "mbl") {
//         console.log(i+ " :"+ student[i]); 
        
        
//     }
 
// }

// let studenttwo = {
//         key :" value"
// }

// studenttwo.key= print=" value"


let studentTwo = {
    name:" hfkhan",
    age : 23,
    email:"hfkhan",
    mbl:1234567890
}


// console.log(studentTwo.name);
// console.log(studentTwo.age);

// for(let i in studentTwo){
   
//     if(i === "mbl" ){
//          console.log(i+" : "+ studentTwo[i]);
//     }
// }

