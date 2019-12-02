import {togglePasswordVisibillity } from '../../redux/loginForm-reducer';
import {toggleRegistrationModal, toggleEnerModal } from '../../redux/app-reducer';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isPasswordShown: state.loginForm.isPasswordShown,
        isRegistrationOpen: state.app.isRegistrationOpen,
        isEnterOpen: state.app.isEnterOpen
    }
}
const LoginFormContainer = connect(mapStateToProps, {togglePasswordVisibillity, toggleRegistrationModal, toggleEnerModal})(LoginForm);

export default LoginFormContainer;


