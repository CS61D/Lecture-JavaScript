//* Object syntax
const person = {
	name: "Alice",
	age: 25,
	isStudent: true,
	"favorite color": "blue", // This is a valid key, but it's not recommended
};

console.log(person.name); // Alice
console.log(person.age); // 25
console.log(person["favorite color"]); // blue

// Although objects are constants, you can add properties to them
person.height = 170;
console.log(person.height); // 170

// Nested objects, and arrays within objects
const student = {
	name: "Bob",
	age: 22,
	isStudent: true,
	classes: [
		{
			name: "Math",
			grade: "A",
		},
		{
			name: "Science",
			grade: "B",
		},
	],
};

console.log(student.classes[0].name); // Math

// Destructuring objects, and renaming variables
const { name, age } = person;
console.log(name); // Alice

// What can we do if we want destructure multiple objects?
const person2 = {
	name: "Charlie",
	age: 30,
	isStudent: false,
};

// Can rename destructured variables
const { name: name1, age: age1 } = person;
const { name: name2, age: age2 } = person2;

//* Handling null and undefined values, nullish coalescing operator and optional chaining
const goalKeeper = {
	number: 20,
	shots: undefined,
	saves: {
		penalty: 1,
		freeKick: 2,
		openPlay: 6,
	},
};

const forward = {
	number: 10,
	shots: {
		onTarget: 5,
		offTarget: 2,
	},
	saves: undefined,
};

const player = Math.random() > 0.5 ? goalKeeper : forward;

// console.log(goalKeeper.shots.onTarget); // Possible error, so optional chain
console.log(player.shots?.onTarget ?? "No shots"); // undefined, or "No shots"

//* Combining objects
const attackingStats = {
	points: 5,
	assists: 3,
};
const defensiveStats = {
	rebounds: 10,
	blocks: 3,
};

const playerStats = { ...attackingStats, ...defensiveStats };
const screens = 5;
const playerStatsWithScreens = { ...playerStats, screens };
// Equivalent to
// playerStatsWithScreens = { ...playerStats, screens: 5 };

// The last object property will overwrite the previous one
const playerStatsWithScreensAndPoints = {
	...playerStatsWithScreens,
	points: 10,
};

//* JSON
const playerJSONString = JSON.stringify(player);
console.log(playerJSONString);
const playerJSON = JSON.parse(playerJSONString);

//* Challenge 2: Given an object representing an athlete, write a function which returns the object with
//* the isInjured property set to false and the sport property to "Unknown", only if the properties do not exist

const athlete1 = {
	name: "Alice",
	isStudent: true,
	isInjured: true,
};

const athlete2 = {
	name: "Bob",
	isStudent: false,
	sport: "Soccer",
};

// Method 1, check if the property exists
const setDefaults = (athlete) => {
	if (athlete.isInjured === undefined) {
		athlete.isInjured = false;
	}
	if (athlete.sport === undefined) {
		athlete.sport = "Unknown";
	}
	return athlete;
};

// Method 2, spread operator and overrides
const setDefaultsSpread = (athlete) => ({
	isInjured: false,
	sport: "Unknown",
	...athlete,
});

console.log(setDefaults(athlete1));
console.log(setDefaults(athlete2));
console.log(setDefaultsSpread(athlete1));
console.log(setDefaultsSpread(athlete2));
