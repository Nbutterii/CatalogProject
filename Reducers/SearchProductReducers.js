const INITIAL_STATE = {
    search: {},
};

const SearchProductReducers = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SEARCH_PRODUCT' :
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
}

export default SearchProductReducers;
