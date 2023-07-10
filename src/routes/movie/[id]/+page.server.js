import { SECRET_API_KEY } from '$env/static/private';

export async function load(url) {
	console.log('id', url.params.id);
	const serverurl = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id='+url.params.id;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	};
	options.headers["X-RapidAPI-Key"]=SECRET_API_KEY
	
	try {
		const response = await fetch(serverurl, options);
		const result = await response.json();
		console.log(result);
		return result
	} catch (error) {
		console.error(error);
	}
}