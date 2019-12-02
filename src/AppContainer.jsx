import {toggleEnerModal, toggleRegistrationModal } from '../src/redux/app-reducer';
import App from './App';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
      isEnterOpen: state.App.isEnterOpen,
      isRegistrationOpen: state.App.isRegistrationOpen
    }
  }
const AppContainer = connect(mapStateToProps, {toggleEnerModal, toggleRegistrationModal})(App);

export default AppContainer;
