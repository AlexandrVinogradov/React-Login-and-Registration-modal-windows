import React, { Component } from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/RegistrationModal/Registration';
import sR from './components/RegistrationModal/Registration.module.css';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import LoginFormContainer from './components/EnterToAccountModal/LoginFormContainer';
// import AppContainer from './AppContainer';

import { connect } from 'react-redux';
import {toggleEnerModal, toggleRegistrationModal} from '../src/redux/app-reducer';
import { compose } from "redux";
import RegistrationForm from './components/RegistrationModal/RegistrationForm';
import RegistrationFormContainer from './components/RegistrationModal/RegistrationFormContainer';



const App = props => {

  const { isEnterOpen } = props;

  const toggleEnerModal = () => {
    props.toggleEnerModal(!isEnterOpen) 
  };

    return (
      <div className="app">
        <div id='EnterToAccountModal'></div>
        <div id='Registration'></div>
        <main>
          <button onClick={toggleEnerModal}>Личный кабинет</button>

          {props.isEnterOpen &&
          <EnterToAccountModal onClose={toggleEnerModal}>
            <LoginFormContainer />
          </EnterToAccountModal>
          }


          {props.isRegistrationOpen &&
            <Registration onClose={toggleRegistrationModal}>
              <RegistrationFormContainer />
            </Registration>
          }
        </main>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    isEnterOpen: state.app.isEnterOpen,
    isRegistrationOpen: state.app.isRegistrationOpen
  }
}
const AppContainer = compose(
  connect(mapStateToProps, {toggleEnerModal, toggleRegistrationModal} ))(App);



// export default connect(mapStateToProps, {toggleEnerModal, toggleRegistrationModal})(App);

export const ModalApp = () => {
  return <>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </>
}


