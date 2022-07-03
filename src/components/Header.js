import React, { useState, useEffect } from 'react';
import { NavLink, Link, useHistory, useLocation } from 'react-router-dom';
import { SearchInput } from '../components';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import logo from '../img/logo.png';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const [accessToken, setAccessToken] = useAuth();
  const [hideLoginBtn, setHideLoginBtn] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    setHideLoginBtn(['/login', '/profile', '/search'].includes(location.pathname));
    setShowSearchInput(['/search'].includes(location.pathname));
  }, [location]);

  const logout = () => {
    const fetchLogout = async () => {
      try {
        await axios.post('/api/auth/logout/', {}, {
          'withCredentials': true
        });
        setAccessToken(null);
      } catch (err) {
        return;
        // console.log(err.response.data.message);
      }
    }
    fetchLogout();
  }

  return (
    <header className='header'>
      {showSearchInput ?
        (<SearchInput />) :
        (<ul className='menu'>
          <li className='menu-item'>
            <NavLink exact to='/' activeClassName='active'>خانه</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to='/contact'>تماس با ما</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to='/about'>درباره ما</NavLink>
          </li>
        </ul>)
      }
      <div className='flex align-center'>
        {hideLoginBtn ?
          ('') :
          // (<button className='login-btn m-l-20' onClick={() => history.push('/login')}>ورود</button>)
          (accessToken ?
            (<button className='login-btn m-l-20' onClick={logout}>خروج</button>) :
            (<button className='login-btn m-l-20' onClick={() => history.push('/login')}>ورود</button>)
          )
        }
        <Link to={'/'}><img className='logo' src={logo} alt='logo' /></Link>
        {/* Below code is not good and loading is slow ... */}
        {/* <Link to={'/'}><img className='logo' src='./images/logo.png' alt='logo' /></Link> */}
      </div>
    </header>
  );
}

export default Header;