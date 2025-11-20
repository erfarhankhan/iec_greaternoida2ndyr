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
for(let i in student){
    if(){
            console.log("i "+" : " + student[i]);
    }
   
    
}
// for(let i in object){
//     //code
// }
for(let i in student){
    // console.log(i+" : "+student[i]);
    if (i == "email" || i == "mbl") {
        console.log(i+ " :"+ student[i]); 
        
        
    }
 
}








