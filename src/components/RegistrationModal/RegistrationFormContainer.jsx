import {togglePasswordVisibillity } from '../../redux/registrationForm-reducer';
import {toggleEnerModal, toggleRegistrationModal } from '../../redux/app-reducer';
import RegistrationForm from './RegistrationForm';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isPasswordShown: state.registrationForm.isPasswordShown,
        isEnterOpen: state.app.isEnterOpen,
        isRegistrationOpen: state.app.isRegistrationOpen
    }
}

const RegistrationFormContainer = connect(mapStateToProps, {togglePasswordVisibillity, toggleEnerModal, toggleRegistrationModal})(RegistrationForm);

export default RegistrationFormContainer;
