import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather, FETCH_WEATHER} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({term: event.target.value});
	}

	handleFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<form className="input-group" onSubmit={this.handleFormSubmit}>
				<input
					placeholder="Search city to get its forecast"
					className="form-control"
					value={this.state.term}
					onChange={this.handleInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

// no need for state
export default connect(null, mapDispatchToProps)(SearchBar);