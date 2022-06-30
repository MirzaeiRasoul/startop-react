import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from '../utils/Axios';

const Profile = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:5000/api/v1/profile/');
        setDatas(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.data.message);
        history.push('/login');
      }
    }
    fetchData();
  }, [history]);

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