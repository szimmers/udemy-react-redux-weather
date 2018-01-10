import React, {Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/weather_chart';

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;

		const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<WeatherChart data={temps} color="blue" units="C" />
				</td>
				<td>
					<WeatherChart data={pressures} color="red" units=" hPa" />
				</td>
				<td>
					<WeatherChart data={humidities} color="green" units="%" />
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
				<tr>
					<th>City</th>
					<th>Temperature</th>
					<th>Pressure</th>
					<th>Humidity</th>
				</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

/*
function mapStateToProps(state) {
	return {weather: state.weather};
}
*/

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);
