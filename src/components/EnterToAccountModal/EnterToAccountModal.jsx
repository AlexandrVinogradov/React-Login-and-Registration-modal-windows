import React from 'react';
import ReactDOM from 'react-dom';

import s from './EnterToAccountModal.module.css';


export default class EnterToAccountModal extends React.Component {
    render() {
        console.log(this.props);
        return ReactDOM.createPortal(
            <div className={s.modal} onClick={this.props.onClose}>
                <div className={s.popup}> 
                    <button className={s.modal__close_button} onClick={this.props.onClose}></button>
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('EnterToAccountModal')
        );
    }
} 