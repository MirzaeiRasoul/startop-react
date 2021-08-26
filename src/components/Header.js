import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';

import auth from '../utils/Auth';

const Header = () => {
  const history = useHistory();
  const [token, setToken] = useState();
  const [hideLoginBtn, setHideLoginBtn] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      setHideLoginBtn(['/login', '/profile'].includes(history.location.pathname));
      if (! await auth.isLoggedIn()) {
        logout();
      } else { setToken(auth.getToken()); }
    }
    verifyToken();

  }, [history]);

  const logout = () => {
    setToken();
    auth.removeToken();
  }

  return (
    <header className='header'>
      <ul className='menu'>
        <li className='menu-item'>
          <NavLink exact to='/' activeClassName='active'>خانه</NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/contact'>تماس با ما</NavLink>
        </li>
        <li className='menu-item'>
          <NavLink to='/about'>درباره ما</NavLink>
        </li>
      </ul>
      <div className='flex align-center'>
        {hideLoginBtn ?
          ('') :
          (token ?
            (<button className='login-btn m-l-20' onClick={logout}>خروج</button>) :
            (<button className='login-btn m-l-20' onClick={() => history.push('/login')}>ورود</button>)
          )
        }
        <Link to={'/'}><img className='logo' src='./images/logo.png' alt='logo' /></Link>
      </div>
    </header>
  );
}

export default Header;