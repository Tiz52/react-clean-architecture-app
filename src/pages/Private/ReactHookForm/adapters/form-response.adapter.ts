import { PokemonResponse } from '../../../../models';

export const pokemonAdapter = (response: PokemonResponse) => {
	const pokemons = response.results.map((pokemon) => ({
		label: pokemon.name,
		value: pokemon.url,
	}));
	return pokemons;
};
