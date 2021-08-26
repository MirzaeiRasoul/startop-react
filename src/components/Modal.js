import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const Modal = ({ isOpen, closeHandler, submitHandler }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeHandler}
      className='modal'
      overlayClassName='modal-overlay'
      contentLabel='onRequestClose Example'
    >
      <div className='login-container'>
        <div className='login-header'>ورود به حساب کاربری</div>
        <div className='login-content'>
          <form className='flex dir-col' onSubmit={submitHandler}>
            <label className='form-label'>نام کاربری</label>
            <input className='form-input' name='username' />
            <label className='form-label m-t-12'>رمز عبور</label>
            <input className='form-input' name='password' />
            <span className='form-message m-t-8'></span>
            <button className='form-button m-t-20'>ورود</button>
          </form>
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;