import { SECRET_API_KEY } from '$env/static/private';

export async function load() {
	const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
options.headers["X-RapidAPI-Key"]=SECRET_API_KEY
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	return {result:result}
} catch (error) {
	console.error(error);
}
}