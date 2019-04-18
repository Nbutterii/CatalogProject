export const GetTokenAction = (token) => {
    return { 
        type: 'Login', 
        payload: token
    };
}