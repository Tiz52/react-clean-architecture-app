const baseUrl = 'https://rickandmortyapi.com/api/';
const characterUrl = `${baseUrl}character/`;

export const getMorty = () => {
	return fetch(characterUrl + '2').then((response) => response.json());
};