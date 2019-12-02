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
                isPasswordShown: true
            }
        default:
            return state;
    }
}

export const togglePasswordVisibillity = () => ({type: TOGGLE_PASSWORD_VISIBILLITY});

export default registrationReducer;
