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

//* Functions

// function declaration, that takes a name argument
function greet(name) {
	console.log(`Hello ${name}`);
}

// arrow function syntax
const goodbye = (name) => {
	console.log(`Goodbye ${name}`);
};

//* Conditionals and ternary operators
const isOldEnough = (age) => {
	if (typeof age !== "number") {
		console.log("Please enter a number");
	} else if (age >= 18) {
		console.log("You are old enough");
		return true;
	} else {
		console.log("You are not old enough");
		return false;
	}
};

// Single line version with ternary operator
const saloonGreeting = (age) =>
	age >= 21 ? "Welcome stranger" : "No youngins allowed";

// Other operators
// || is the OR operator
// && is the AND operator
// the NOT operator is !
