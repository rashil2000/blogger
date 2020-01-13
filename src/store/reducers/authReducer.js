const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ERROR_SIGNING_IN':
            console.log('Sign in failed');
            return {
                ...state,
                authError: 'Sign in failed'
            };
        case 'SIGNED_IN':
            console.log('Sign in success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNED_OUT':
            console.log('Sign out success');
            return state;
        case 'SIGNED_UP':
            console.log('Sign up success');
            return {
                ...state,
                authError: null
            };
        case 'ERROR_SIGNING_UP':
            console.log('Sign up failed');
            return {
                ...state,
                authError: action.error.message
            }
        default:
            return state;
    }
}

export default authReducer;