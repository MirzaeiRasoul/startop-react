import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRefresh from '../hooks/useRefresh';
import axios from '../utils/axios';

const Profile = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const { auth, setAuth, setIsLogined } = useAuth();
  const refresh = useRefresh();

  useEffect(() => {
    // Prevent request when user is not login and Handle logout from this page
    if (!auth?.accessToken) return history.push('/login');

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/auth/profile/', { headers: { 'X-Access-Token': auth?.accessToken } });
        setDatas(response.data);
        setIsLoading(false);
      } catch (_) {
        try {
          await refresh();
        } catch (err) {
          setIsLogined(false);
          setAuth({});
          console.error(err.response.data.message);
          history.push('/login');
        }
      }
    }
    fetchData();
  }, [auth?.accessToken]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {isLoading ?
        <main className='main'>Loading ...</main>
        :
        <main className='main'>
          <div className='main-content'>
            {JSON.stringify(datas)}
          </div>
        </main>
      }
    </React.Fragment>
  );
}

export default Profile;
