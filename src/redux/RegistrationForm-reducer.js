const TOGGLE_PASSWORD_VISIBILLITY = 'registrationForm-reducer/TOGGLE_PASSWORD_VISIBILLITY'

let initialState = {
    isEnterOpen: false,
    isRegistrationOpen: false,
    isPasswordShown: false
}

const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_PASSWORD_VISIBILLITY: 
            return {
                ...state,
                isPasswordShown: action.isPasswordShown
            }
        default:
            return state;
    }
}

export const togglePasswordVisibillity = (isPasswordShown) => ({type: TOGGLE_PASSWORD_VISIBILLITY, isPasswordShown});

export default registrationReducer;
