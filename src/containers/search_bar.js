import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<form className="input-group">
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

export default SearchBar;