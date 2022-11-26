export interface UserState {
	id: number;
	name: string;
	email: string;
}

interface Movie {
	label: string;
	year: number;
}

export interface UserForm {
	name: string;
	email: string;
	phone: string;
	password: string;
	dateBirth: string;
	country: string;
	movie: Movie | null;
}