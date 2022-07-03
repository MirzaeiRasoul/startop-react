import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

const Profile = () => {
  const history = useHistory();
  const [accessToken, setAccessToken] = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/auth/profile/', {
          headers: {
            'X-Access-Token': accessToken
          }
        });
        setDatas(response.data);
        setIsLoading(false);
      } catch (err) {
        setAccessToken(null);
        history.push('/login');
        // console.log(err.response.data.message);
      }
    }
    fetchData();
  }, [history, accessToken, setAccessToken]);

  return (
    <React.Fragment>
      {isLoading ? <main className='main'>Loading ...</main> : (
        <main className='main'>
          <div className='main-content'>
            {JSON.stringify(datas)}
          </div>
        </main>
      )}
    </React.Fragment>
  );
}

export default Profile;