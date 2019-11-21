import React, { Component } from 'react';
import EnterToAccountModal from './components/EnterToAccountModal/EnterToAccountModal';
import Registration from './components/Registration/Registration';


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
              <h1>Личный кабинет</h1>
              <button onClick={this.toggleRegistrationModal} >Зарегистрироваться</button>
            </EnterToAccountModal>
          }


          {this.state.isRegistrationOpen &&
            <Registration onClose={this.toggleRegistrationModal}>
              <h1>Регистрация</h1>
              <button onClick={this.toggleEnerModal} >Войти в личный кабинет</button>
            </Registration>
          }


        </main>
      </div>
    );
  }
}
export default App;

