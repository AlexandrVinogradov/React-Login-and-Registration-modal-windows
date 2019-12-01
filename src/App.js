import React, { Component } from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/RegistrationModal/Registration';
import s from './components/EnterToAccountModal/EnterToAccountModal.module.css';
import sR from './components/RegistrationModal/Registration.module.css';
import LoginForm from './components/EnterToAccountModal/LoginForm';


class App extends Component {
  state = {
    isEnterOpen: false,
    isRegistrationOpen: false
  };

  toggleEnerModal = () => {
    this.setState(state => ({ isEnterOpen: !state.isEnterOpen, isRegistrationOpen: false }));
  };
  toggleRegistrationModal = () => {
    this.setState(state => ({ isRegistrationOpen: !state.isRegistrationOpen, isEnterOpen: false }));
  };

  render() {
    const {isPasswordShown} = this.state;

    return (
      <div className="app">
        <div id='EnterToAccountModal'></div>
        <div id='Registration'></div>
        <main>
          <button onClick={this.toggleEnerModal}>Личный кабинет</button>

          {this.state.isEnterOpen &&
          <EnterToAccountModal onClose={this.toggleEnerModal}>
            <LoginForm isEnterOpen={this.isEnterOpen} isRegistrationOpen={this.isRegistrationOpen} 
            isPasswordShown={this.isPasswordShown}  />
          </EnterToAccountModal>
          }


          {this.state.isRegistrationOpen &&
            <Registration onClose={this.toggleRegistrationModal}>
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
                <button className={sR.eye} onClick={this.togglePasswordVisibillity}></button>
              </div>
              <input type={(isPasswordShown) ? 'text' : 'password'} />
              <p className={sR.maxSymbols}>не менее 6 символов</p>
              <div className={sR.agree}>
                <input type='checkbox'/>
                <p className={sR.agree__title}>Я принимаю условия <a href='#'>Соглашения</a> </p>
              </div>
              <button className={sR.registration_btn} onClick={this.toggleEnerModal}>Зарегистрироваться</button>
              <div className={sR.footer}>
                <p className={sR.footer__descr}>Уже есть аккаунт?</p>
                <button className={sR.footer__btn} onClick={this.toggleEnerModal} >Войти в личный кабинет</button>
              </div>
            </Registration>
          }
        </main>
      </div>
    );
  }
}
export default App;

