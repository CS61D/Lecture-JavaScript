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

// Slow, sequential
const pikachuBaseXP = await getPikachuBaseXP();
const charizardBaseXP = await getCharizardBaseXP();
console.log(pikachuBaseXP, charizardBaseXP);

// Fast, parallel
const [pikachuXP, charizardXP] = await Promise.all([
	getPikachuBaseXP(),
	getCharizardBaseXP(),
]);
console.log(pikachuXP + charizardXP);

//* Handling errors with try catch
try {
	const divisor = 0;
	const result = 10 / divisor; // Error
	console.log(result);
} catch (error) {
	console.log(error);
}

//* Challenge 3: Write an async function that takes a name of a pokemon and returns the base experience
//* If the pokemon is not found, return "Pokemon not found"

const getPokemonBaseXP = async (pokemonName) => {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
		);
		const data = await response.json();
		return data.base_experience;
	} catch (error) {
		return "Pokemon not found";
	}
};

console.log(await getPokemonBaseXP("pikachu"));
console.log(await getPokemonBaseXP("charizard"));
console.log(await getPokemonBaseXP("missingno"));
