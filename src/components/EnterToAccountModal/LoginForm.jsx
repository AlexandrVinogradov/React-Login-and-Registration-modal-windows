import React, { Component } from 'react';
import EnterToAccountModal from './EnterToAccountModal';
import s from './EnterToAccountModal.module.css';

class LoginForm extends Component {
    state = {
        isPasswordShown: false
    };


    togglePasswordVisibillity = () => {
        this.setState(state => ({ isPasswordShown: !state.isPasswordShown }));
    };

    render() {
        const { isPasswordShown } = this.state;

        return <>
            {/* {props.isEnterOpen &&
            <EnterToAccountModal onClose={props.toggleEnerModal}> */}
            <h1 className={s.title}>Личный кабинет</h1>
            <p className={s.email_pass}>Email</p>
            <input />
            <div className={s.pass_block}>
                <p className={s.email_pass}>Пароль</p>


                <button className={s.eye} onClick={this.togglePasswordVisibillity}></button>


            </div>
            <input type={(isPasswordShown) ? 'text' : 'password'} />
            <button className={s.enter_btn}>Войти</button>
            <div className={s.footer}>
                <div>
                    <p className={s.footer__descr}>Еще нет аккаунта?</p>
                    <button className={s.footer__btn} onClick={this.props.toggleRegistrationModal}>Зарегистророваться</button>
                </div>
                <div className={s.footer__block}>
                    <p className={s.footer__descr}>Забыли пароль?</p>
                    <button className={s.footer__btn} onClick={this.props.toggleEnerModal} >Восстановить</button>
                </div>
            </div>
            {/* </EnterToAccountModal>
          } */}
        </>
    }
}
export default LoginForm;