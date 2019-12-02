const TOGGLE_ENTER_MODAL = 'app-reducer/TOGGLE_ENTER_MODAL'
const TOGGLE_REGISTRATION_MODAL = 'app-reducer/TOGGLE_REGISTRATION_MODAL'

let initialState = {
    isEnterOpen: false,
    isRegistrationOpen: false
}

const registrationReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_ENTER_MODAL: 
            return {
                ...state,
                isEnterOpen: action.isEnterOpen
            }
        case TOGGLE_REGISTRATION_MODAL: 
            return {
                ...state, 
                isRegistrationOpen: action.isRegistrationOpen
            }
        default:
            return state;
    }
}

export const toggleEnerModal = (isEnterOpen) => ({type: TOGGLE_ENTER_MODAL, isEnterOpen});
export const toggleRegistrationModal = (isRegistrationOpen) => ({type: TOGGLE_REGISTRATION_MODAL, isRegistrationOpen});

export default registrationReducer;

