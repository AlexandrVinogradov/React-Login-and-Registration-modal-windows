import React from 'react';
import s from './EnterToAccountModal.module.css';
import {maxLenghtCreator, required} from '../../utilits/validators/validators';

import { reduxForm, Field } from 'redux-form';
import {Input} from '../../components/FormControl/FormsControls';

const maxLength10 = maxLenghtCreator(10);

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.textarea} validate={[required, maxLength10]}
                name="newPostText" component={Input} />
        </div>
        <div>
            {/* <button className={s.button}>Add post</button> */}
        </div>
    </form>
}
const AddPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);


const LoginForm = props => {

        const { isPasswordShown } = props;
        const { isRegistrationOpen } = props;
        const { isEnterOpen } = props;

        const onTogglePasswordVisibillity = () => {
            props.togglePasswordVisibillity(!isPasswordShown)
        }

        const onToggleRegistrationModal = () => {
            props.toggleEnerModal(!isEnterOpen)
            props.toggleRegistrationModal(!isRegistrationOpen)
        }

        return <>
            <h1 className={s.title}>Личный кабинет</h1>
            <p className={s.email_pass}>Email</p>

            <AddPostFormRedux />
            {/* <input /> */}

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

