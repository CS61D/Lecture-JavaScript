// single line comment

/* 
Multi line comment
hello, I am on a second line.
*/

//* logging
console.log("Hello, World!");

//* variables
let myVariable = 5; // let for mutable variables
myVariable = 10;

const myConstant = 10; // const for immutable variables
const boolean = false;
const myNull = null;
const myUndefined = undefined;

//* Functions

// function declaration, that takes a name argument
function greet(name) {
	console.log(`Hello ${name}`); // Template string
}

// arrow function syntax
const goodbye = (name) => {
	console.log(`Goodbye ${name}`);
};

//* Conditionals and ternary operators
const isOldEnough = (age) => {
	if (age >= 21) {
		return "Welcome stranger";
	} else {
		return "No youngins allowed";
	}
};

// Single line version with ternary operator
const isOldEnoughArrow = (age) =>
	age >= 21 ? "Welcome stranger" : "No youngins allowed";

// Other operators
// || is the OR operator
// && is the AND operator
// the NOT operator is !
