const INITIAL_STATE = {
    token: ''
};

const MenageLogin = ( state = INITIAL_STATE , action ) => {
        switch(action.type){
            case 'Login' :
                return {
                    ...state,
                    token: action.payload
                };
            case 'Logout' :
                return INITIAL_STATE;
            default:
                return state;
        }
}

export default MenageLogin;