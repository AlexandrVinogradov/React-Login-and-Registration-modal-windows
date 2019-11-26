import React, { Component } from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/RegistrationModal/Registration';
import s from './components/EnterToAccountModal/EnterToAccountModal.module.css';



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
              <p className={s.email_pass}>Пароль</p>
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
              <h1>Регистрация</h1>
              <p>
              Регистрация занимает 30 секунд. <br/>После регистрации вы получите<br/> 7 дней бесплатного доступа.
              </p>
              <p>Email</p>
              <input />
              <p>Пароль</p>
              <input />
              <p>не менее 6 символов</p>
              <div>
                <input type='checkbox'/>
                <p>Я принимаю условия <a href='#'>Соглашения</a> </p>
              </div>
              <button onClick={this.toggleEnerModal}>Зарегистрироваться</button>
              <p>Уже есть аккаунт?</p>
              <button onClick={this.toggleEnerModal} >Войти в личный кабинет</button>
            </Registration>
          }
        </main>
      </div>
    );
  }
}
export default App;

