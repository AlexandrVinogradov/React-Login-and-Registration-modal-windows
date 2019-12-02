import React, { Component } from 'react';
import sR from './Registration.module.css';

class RegistrationForm extends Component {
    state = {
        isPasswordShown: false
    };
    togglePasswordVisibillity = () => {
        this.setState(state => ({ isPasswordShown: !state.isPasswordShown }));
    };

    render() {
        const { isPasswordShown } = this.state;

        return <>
            <h1 className={sR.title}>Регистрация</h1>
            <p className={sR.reg_info}>
                Регистрация занимает 30 секунд. <br />
                После регистрации вы получите<br />
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
                <input type='checkbox' />
                <p className={sR.agree__title}>Я принимаю условия <a href='#'>Соглашения</a> </p>
            </div>
            <button className={sR.registration_btn} onClick={this.toggleEnerModal}>Зарегистрироваться</button>
            <div className={sR.footer}>
                <p className={sR.footer__descr}>Уже есть аккаунт?</p>
                <button className={sR.footer__btn} onClick={this.toggleEnerModal} >Войти в личный кабинет</button>
            </div>
        </>
    }
}
export default RegistrationForm;