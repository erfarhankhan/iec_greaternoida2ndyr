// 📘 JavaScript One-Page Notes
// 🔹 1. Arithmetic Operators

// Used for mathematical calculations.

// Operator	Meaning	Example
// +	Addition	5 + 2 = 7
// -	Subtraction	5 - 2 = 3
// *	Multiplication	5 * 2 = 10
// /	Division	10 / 2 = 5
// %	Remainder	10 % 3 = 1
// **	Power	2 ** 3 = 8
// 🔹 2. Assignment Operators

// Used to assign/update variables.

// Operator	Meaning	Example
// =	Assign	a = 10
// +=	Add & assign	a += 2
// -=	Subtract & assign	a -= 2
// *=	Multiply & assign	a *= 2
// /=	Divide & assign	a /= 2
// %=	Modulus & assign	a %= 2
// 🔹 3. Comparison Operators

// Return true/false.

// Operator	Meaning	Example
// ==	Equal (value)	5 == "5" → true
// ===	Strict equal (value+type)	5 === "5" → false
// !=	Not equal	5 != 6 → true
// !==	Strict not equal	5 !== "5" → true
// >	Greater	6 > 5
// <	Less	3 < 4
// >=	Greater or equal	5 >= 5
// <=	Less or equal	4 <= 4

// Key Difference:
// ✔ == → allows type conversion
// ✔ === → no type conversion

// 🔹 4. Logical Operators

// Used in conditions.

// Operator	Meaning	Example
// &&	AND	true && false → false
// `		`
// !	NOT	!true → false

// Short-circuit:

// true || anything → anything not checked

// false && anything → anything not checked

// 🔹 5. Bitwise Operators

// Work on binary bits.

// Operator	Meaning	Example
// &	AND	5 & 1 = 1
// |	OR	5 | 1 = 5
// ^	XOR	5 ^ 1 = 4
// ~	NOT	~5 = -6
// <<	Left shift	5 << 1 = 10
// >>	Right shift	5 >> 1 = 2
// >>>	Zero-fill shift	5 >>> 1 = 2
// 🔹 6. Type Conversion
// ✔ Implicit (Automatic)

// JS converts types on its own.

// "5" + 2 → "52" (string wins)

// "10" - 2 → 8

// "6" * "2" → 12

// true + 1 → 2

// ✔ Explicit (Manual)

// You convert types yourself.

// Convert To	Method	Example
// Number	Number(), parseInt()	Number("10") → 10
console.log(Number("10") , "number");

// String	String(), toString()	String(20) → "20"
// Boolean	Boolean()	Boolean("") → false
// 🔹 7. Falsy Values

// Become false in Boolean conversion:

// 0, "", null, undefined, NaN, false

// Everything else → true
/////////////////////////////////////////////////////////////////////////////////

// ternary operator

const age  = 26 ;
const vote = age >=21?"u can vote":" u cant ";
console.log( vote);
if(age>21){
    console.log("ucan vte");
    
}else if(age =20){
        console.log("u n waite for i1 yr");
        
}else{
        console.log("u cantvote");
        
}



// let z = 5;
// let y = 3;
// let result = z| y;
// console.log(result+" bitwise");

