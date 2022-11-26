export interface Pokemon {
	label: string;
	value: string;
}

export interface User {
	name: string;
	email: string;
	phone: string;
	password: string;
	dateBirth: string;
	country: string;
	pokemon: Pokemon | null;
}