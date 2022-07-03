import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useAuth();

  useEffect(() => {
    if (accessToken) {
      history.push('/profile');
    }
  }, [history, accessToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login/', {
        username: e.target.username.value,
        password: e.target.password.value
      }, {
        withCredentials: true
      });
      setAccessToken(response.data.accessToken);
      history.push('/profile');
    } catch (err) {
      document.getElementsByClassName('form-message')[0].style.display = 'block';
      document.getElementsByClassName('form-message')[0].innerHTML = err.response.data.message;
    }
  }

  return (
    <React.Fragment>
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
                <span className='form-message m-t-12'></span>
                <button className='form-button m-t-20 m-b-8'>ورود</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;