import React from 'react';
import ReactDOM from 'react-dom';

import s from './EnterToAccountModal.module.css';

export default class EnterToAccountModal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className={s.modal}>
                <div className={s.popup}> 
                    <button className={s.modal__close_button} onClick={this.props.onClose}>Закрыть</button>
                    {this.props.children}
                </div>
            </div>,
            document.getElementById('EnterToAccountModal')
        );
    }
}