//* Basic Async Syntax

const getPikachuBaseXP = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
	const data = await response.json();
	return data.base_experience;
};

const getCharizardBaseXP = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
	const data = await response.json();
	return data.base_experience;
};

//* Handling errors with try catch

//* Challenge 3: Write an async function that takes a name of a pokemon and returns the base experience
//* If the pokemon is not found, return "Pokemon not found"
