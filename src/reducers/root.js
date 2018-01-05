const initialState = { clicks: 0 };

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

	case 'CHANGE_COUNT':
		return {
			...state,
			clicks: state.clicks + action.payload.amount,
		};

	default:
		return state;
	}
};

export default rootReducer;
