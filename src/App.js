import React from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/RegistrationModal/Registration';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import LoginFormContainer from './components/EnterToAccountModal/LoginFormContainer';
import { connect } from 'react-redux';
import { toggleEnerModal, toggleRegistrationModal } from '../src/redux/app-reducer';
import RegistrationFormContainer from './components/RegistrationModal/RegistrationFormContainer';

const App = props => {

  const { isEnterOpen } = props;
  const { isRegistrationOpen } = props;

  const toggleEnerModal = () => {
    props.toggleEnerModal(!isEnterOpen)
  };
  const toggleRegistrationModal = () => {
    props.toggleRegistrationModal(!isRegistrationOpen)
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
const AppContainer = connect(mapStateToProps, { toggleEnerModal, toggleRegistrationModal })(App);

export const ModalApp = () => {
  return <>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </>
}


