import React from 'react';
import s from './EnterToAccountModal.module.css';

const LoginForm = props => {

        const { isPasswordShown } = props;

        const onTogglePasswordVisibillity = () => {
            props.togglePasswordVisibillity(!isPasswordShown)
        }

        const onToggleRegistrationModal = () => {

        }

        return <>
            <h1 className={s.title}>Личный кабинет</h1>
            <p className={s.email_pass}>Email</p>
            <input />
            <div className={s.pass_block}>
                <p className={s.email_pass}>Пароль</p>


                <button className={s.eye} onClick={onTogglePasswordVisibillity}></button>


            </div>
            <input type={props.isPasswordShown ? 'text' : 'password'} />
            <button className={s.enter_btn}>Войти</button>
            <div className={s.footer}>
                <div>
                    <p className={s.footer__descr}>Еще нет аккаунта?</p>
                    <button className={s.footer__btn} onClick={onToggleRegistrationModal}>Зарегистророваться</button>
                </div>
                <div className={s.footer__block}>
                    <p className={s.footer__descr}>Забыли пароль?</p>
                    <button className={s.footer__btn} onClick={props.toggleEnerModal} >Восстановить</button>
                </div>
            </div>
        </>
}
export default LoginForm;

