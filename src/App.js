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
              {/* <RegistrationForm isEnterOpen={this.isEnterOpen} isRegistrationOpen={this.isRegistrationOpen} /> */}

              <h1 className={sR.title}>Регистрация</h1>
              <p className={sR.reg_info}>
              Регистрация занимает 30 секунд. <br/>
              После регистрации вы получите<br/> 
              <span className={sR.reg_info__green}>7 дней бесплатного доступа.</span>
              </p>
              <p className={sR.email_pass}>Email</p>
              <input />
              <div className={sR.pass_block}>
                <p className={sR.email_pass}>Пароль</p>
                {/* <button className={sR.eye} onClick={togglePasswordVisibillity}></button> */}
              </div>
              {/* <input type={(isPasswordShown) ? 'text' : 'password'} /> */}
              <p className={sR.maxSymbols}>не менее 6 символов</p>
              <div className={sR.agree}>
                <input type='checkbox'/>
                <p className={sR.agree__title}>Я принимаю условия <a href='#'>Соглашения</a> </p>
              </div>
              <button className={sR.registration_btn} onClick={toggleEnerModal}>Зарегистрироваться</button>
              <div className={sR.footer}>
                <p className={sR.footer__descr}>Уже есть аккаунт?</p>
                <button className={sR.footer__btn} onClick={toggleEnerModal} >Войти в личный кабинет</button>
              </div>
            </Registration>
          }
        </main>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    isEnterOpen: state.App.isEnterOpen,
    isRegistrationOpen: state.App.isRegistrationOpen
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


