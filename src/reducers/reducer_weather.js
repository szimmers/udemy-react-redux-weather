import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// concat returns a new array
			//return state.concat([action.payload.data]);
			// this is the actual equivalent of the concat
			//console.log([...state, action.payload.data]);
			// must return a new array from here
			return [action.payload.data, ...state];

			break;
	}

	return state;
}