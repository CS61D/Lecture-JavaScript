//* Basic array syntax
const myArray = [1, 3, 3, 9, 5];

console.log(myArray[0]); // 1
console.log(myArray[1]); // 3

//* Arrays with loops
const names = ["Alice", "Bob", "Charlie"];

// Loop by index
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

// Loop by value
for (const name of names) {
	console.log(name);
}

// Loop by value and index
for (const [index, name] of names.entries()) {
	console.log(index, name);
}

names.forEach((name, index) => {
	console.log(index, name);
});

//* Array methods
const dirtyData = [1, "2", 3, "3", 5, "6", 7, "8", 9];

// Map, transforms each element of the array
const cleanData = dirtyData.map((element) => Number.parseInt(element));

// Filter, returns a subset of the array based on a condition
const oddNumbers = cleanData.filter((element) => element % 2 !== 0);

// some, returns true if at least one element satisfies the condition
const hasEvenNumbers = cleanData.some((element) => element % 2 === 0); // true
// can also use includes method for array values
const hasEvenNumbersIncludes = cleanData.includes(2); // false
const indexOfTwo = cleanData.indexOf(2); // -1 (not found)

// every, returns true if all elements satisfy the condition
const allOdd = cleanData.every((element) => element % 2 !== 0); // false

//* Slicing arrays
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];

const firstThreePrimes = primes.slice(0, 3); // [2, 3, 5]
const primesAfterFive = primes.slice(3); // [7, 11, 13, 17, 19, 23]
const lastThreePrimes = primes.slice(-3); // [17, 19, 23]

// How would we get all primes but the fourth one?

// Method 1, slice and flatten
const allButIndex = (array, index) => {
	const firstHalf = array.slice(0, index);
	const secondHalf = array.slice(index + 1);
	const combined = [firstHalf, secondHalf]; // [[2, 3, 5, 7], [13, 17, 19, 23]]
	return combined.flat(); // [2, 3, 5, 7, 13, 17, 19, 23]
};

// Method 2, spread operator
const allButIndexSpread = (array, index) => {
	const firstHalf = array.slice(0, index);
	const secondHalf = array.slice(index + 1);
	return [...firstHalf, ...secondHalf];
};

//* Challenge 1: Given two arrays, return an array with the elements that are in both arrays
const threeMultiples = [3, 6, 9, 12, 15];
const twoMultiples = [2, 4, 6, 8, 10, 12];

// Method 1, double loop
const commonMultiplesLoop = (array1, array2) => {
	const common = [];
	for (const element1 of array1) {
		for (const element2 of array2) {
			if (element1 === element2) {
				common.push(element1);
			}
		}
	}
	return common;
};

// Method 2, filter and includes
const commonMultiplesFilter = (array1, array2) =>
	array1.filter((element) => array2.includes(element));

// Method 3, filter and set
const commonMultiplesSet = (array1, array2) => {
	const set = new Set(array2);
	return array1.filter((element) => set.has(element));
};
