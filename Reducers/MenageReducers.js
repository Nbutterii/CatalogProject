const INITIAL_STATE = {
    val: {},
};

const MenageReducers = ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case 'SHOW_DATA_DETAIL' :
            return {
                ...state,
                val: action.payload
            };
        default:
            return state;
    }
}

export default MenageReducers;