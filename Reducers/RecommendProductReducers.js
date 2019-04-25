const INITIAL_STATE = {
    recommend: {},
};

const RecommendProductReducers = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'RECOMMEND_PRODUCT' :
            return {
                ...state,
                recommend: action.payload
            };
        default:
            return state;
    }
}

export default RecommendProductReducers;