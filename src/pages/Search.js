import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clearQuery = decodeURIComponent(history.location.search.substring(3));
        const response = await axios.get(`/api/search/${clearQuery}`);
        setDatas(response.data.startups);
        setIsLoading(false);
      } catch (err) {
        return;
        // history.push('/login');
        // console.log(err.response.data.message);
      }
    }
    fetchData();
  }, [history, history.location.search]);

  return (
    <React.Fragment>
      {isLoading ? <main className='main'>Loading ...</main> : (
        <main className='main'>
          <div className='main-panel'>
            <div className='main-panel-header'>

            </div>
            <div className='main-panel-list'>
              {datas.length ? (datas.map((startup, index) => (
                <div className='result-item' key={startup.id}>
                  <div className='result-image'>
                    <img src={`../images/startups/logo${startup.id}.png`} alt={`logo${startup.id}`} />
                  </div>
                  <div className='result-content'>
                    <div className='result-title'>{startup.title}</div>
                    <div className='result-description'>{startup.description}</div>
                  </div>
                </div>
              ))) : (
                <div>نتیجه یافت نشد.</div>
              )}
            </div>
          </div>
          <div className='left-panel'>

          </div>
        </main>
      )}
    </React.Fragment>
  );
}

export default Home;