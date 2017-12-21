import axios from 'axios';

// c.f. http://openweathermap.org/forecast5
// this is the one from the course. it may not work.
const API_KEY = '6a78596d062df78380eff5944c4e5567';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}