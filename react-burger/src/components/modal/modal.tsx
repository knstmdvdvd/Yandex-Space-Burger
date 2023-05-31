import React, { useEffect } from 'react';
import modalStyles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ReactDOM from 'react-dom';

type Props = {
  closeModal: () => void;
  title: string;
  children: React.ReactNode,
};

function Modal({ closeModal, title, children }: Props) {
  const modalWrapper = document.getElementById("modals") as HTMLElement;
  useEffect(() => {
    let onEscClick = (el: { key: string }) => {
      if (el.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', onEscClick);

    return () => {
      document.removeEventListener('keydown', function (el) {
        if (el.key === 'Escape') {
          closeModal();
        }
      });
    }
  }

  )

  return ReactDOM.createPortal((
    <>
      <ModalOverlay closeOverlay={closeModal} />
      <div className={`pt-15 pb-15 pl-10 pr-10 ${modalStyles.modal_wrapper}`}>
        <div className={`${modalStyles.modal_wrapper_header}`}>
          <span className='text text_type_main-large'>
            {title}
          </span>
          <div onClick={closeModal}>
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
    </>), modalWrapper);
}

export default Modal;
