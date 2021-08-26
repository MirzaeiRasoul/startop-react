import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import auth from '../utils/Auth';
import Header from '../components/Header';

const Login = () => {
  const history = useHistory();

  const login = (data) => {
    auth.setToken(data);
    document.getElementsByClassName('form-message')[0].style.display = 'none';
    history.push('/');
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        user: {
          username: e.target.username.value,
          password: e.target.password.value
        }
      });
      login(response.data);
    } catch (err) {
      document.getElementsByClassName('form-message')[0].style.display = 'block';
      document.getElementsByClassName('form-message')[0].innerHTML = err.response.data.message;
    }
  }

  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <div className='main-content'>
          <div className='login-container'>
            <div className='login-header'>ورود به حساب کاربری</div>
            <div className='login-content'>
              <form className='flex dir-col' onSubmit={submitHandler}>
                <label className='form-label'>نام کاربری</label>
                <input className='form-input' name='username' />
                <label className='form-label m-t-12'>رمز عبور</label>
                <input className='form-input' name='password' />
                <span className='form-message m-t-8'></span>
                <button className='form-button m-t-20 m-b-12'>ورود</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;