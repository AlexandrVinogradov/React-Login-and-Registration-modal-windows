import React, { Component } from 'react';
import s from './EnterToAccountModal.module.css';

const LoginForm = props => {
    // state = {
    //     isPasswordShown: false
    // };
    // togglePasswordVisibillity = () => {
    //     this.setState(state => ({ isPasswordShown: !state.isPasswordShown }));
    // };


        // const { isPasswordShown } = this.state;


        const { isPasswordShown } = props;

        const onToggleRegistrationModal = () => {
            props.togglePasswordVisibillity(!isPasswordShown)
        }

        return <>
            <h1 className={s.title}>Личный кабинет</h1>
            <p className={s.email_pass}>Email</p>
            <input />
            <div className={s.pass_block}>
                <p className={s.email_pass}>Пароль</p>


                <button className={s.eye} onClick={onToggleRegistrationModal}></button>


            </div>
            <input type={props.isPasswordShown ? 'text' : 'password'} />
            <button className={s.enter_btn}>Войти</button>
            <div className={s.footer}>
                <div>
                    <p className={s.footer__descr}>Еще нет аккаунта?</p>
                    <button className={s.footer__btn} onClick={props.toggleRegistrationModal}>Зарегистророваться</button>
                </div>
                <div className={s.footer__block}>
                    <p className={s.footer__descr}>Забыли пароль?</p>
                    <button className={s.footer__btn} onClick={props.toggleEnerModal} >Восстановить</button>
                </div>
            </div>
        </>
    
}
export default LoginForm;

