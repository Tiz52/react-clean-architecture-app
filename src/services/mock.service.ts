import { UserResponse, CountryResponse, PokemonResponse } from '../models';
import axios, { AxiosPromise } from 'axios';

const userResponse: UserResponse  = {
	name: 'John Doe',
	email: 'J@email.com',
	phone: '(123) 456-7890',
	password: '123456',
	dateBirth: '2021-10-10',
	country: '1',
	pokemon: {
		label: 'bulbasaur',
		value: 'bulbasaur'
	}
};

const countries: CountryResponse[] = [
	{
		value: '1',
		label: 'Brazil',
	},
	{
		value: '2',
		label: 'USA',
	},
	{
		value: '3',
		label: 'Canada',
	},
];

export const getUserInfo = () => {
	return new Promise<UserResponse>((resolve) => {
		setTimeout(() => {
			resolve(userResponse);
		}, 2000);
	});
};

export const getPokemons = (limit: number): {
	call: AxiosPromise<PokemonResponse>
	controller: AbortController,
} => {
	const controller = new AbortController();
	const response =  axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
		signal: controller.signal,
	});
	return {
		call: response,
		controller
	};
};

export const getCountries = () => {
	return new Promise<CountryResponse[]>((resolve) => {
		setTimeout(() => {
			resolve(countries);
		}, 2000);
	});
};
