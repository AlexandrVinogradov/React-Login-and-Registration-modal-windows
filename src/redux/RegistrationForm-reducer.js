const TOGGLE_PASSWORD_VISIBILLITY = 'registrationForm-reducer/TOGGLE_PASSWORD_VISIBILLITY'

let initialState = {
    isEnterOpen: false,
    isRegistrationOpen: false,
    isPasswordShown: false
}

const RegistrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_PASSWORD_VISIBILLITY: 
            return {
                ...state,
                isPasswordShown: !isPasswordShown
            }
        default:
            return state;
    }
}

export const togglePasswordVisibillity = () => ({type: TOGGLE_PASSWORD_VISIBILLITY});

export default RegistrationReducer;
