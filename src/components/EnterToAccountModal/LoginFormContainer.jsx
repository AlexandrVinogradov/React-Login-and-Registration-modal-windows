import {togglePasswordVisibillity } from '../../redux/loginForm-reducer';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isPasswordShown: state.loginForm.isPasswordShown
    }
}
const LoginFormContainer = connect(mapStateToProps, {togglePasswordVisibillity})(LoginForm);

export default LoginFormContainer;
