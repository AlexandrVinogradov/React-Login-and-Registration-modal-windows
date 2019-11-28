import React, { Component } from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/RegistrationModal/Registration';
import s from './components/EnterToAccountModal/EnterToAccountModal.module.css';
import sR from './components/RegistrationModal/Registration.module.css';




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
    return (
      <div className="app">
        <header>
          {/* <img src={logo} alt="React logo" />
                  <h1>React 16</h1> */}
        </header>
        <div id='EnterToAccountModal'></div>
        <div id='Registration'></div>
        <main>
          <button onClick={this.toggleEnerModal}>Личный кабинет</button>
          {this.state.isEnterOpen &&
            <EnterToAccountModal onClose={this.toggleEnerModal}>
              <h1 className={s.title}>Личный кабинет</h1>
              <p className={s.email_pass}>Email</p>
              <input />
              <div className={s.pass_block}>
                <p className={s.email_pass}>Пароль</p>
                <button className={s.eye}></button>
              </div>
              <input />
              <button className={s.enter_btn}>Войти</button>
              <div className={s.footer}>
                <div>
                  <p className={s.footer__descr}>Еще нет аккаунта?</p>
                  <button className={s.footer__btn} onClick={this.toggleRegistrationModal}>Зарегистророваться</button>
                </div>
                <div className={s.footer__block}>
                  <p className={s.footer__descr}>Забыли пароль?</p>
                  <button className={s.footer__btn} onClick={this.toggleEnerModal} >Восстановить</button>
                </div>
              </div>
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
                <button className={sR.eye}></button>
              </div>
              <input />
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

