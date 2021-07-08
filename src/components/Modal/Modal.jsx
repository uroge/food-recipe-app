import React from 'react';

import './Modal.scss';

const Modal = ({ message, closeModal }) => (
    <div className="modal">
        <div className="modal__content">
            { message }
            <button className="modal__btn" onClick={ closeModal }>&times;</button>
        </div>
    </div>
);

export default Modal;