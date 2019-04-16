const INITIAL_STATE = {
    val: {},
};

const SearchProductReducers = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SEARCH_PRODUCT' :
            return {
                ...state,
                val: action.payload
            };
        default:
            return state;
    }
}

export default SearchProductReducers;