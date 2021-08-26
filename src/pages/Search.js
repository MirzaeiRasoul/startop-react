import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ResultHeader from '../components/ResultHeader';

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const clearQuery = decodeURIComponent(props.location.search.substring(3));
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/search/${clearQuery}`);
        setDatas(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
    fetchData();
    setQuery(clearQuery);
  }, [props]);

  return (
    <React.Fragment>
      <ResultHeader query={query} />
      {isLoading ? <main className='main searh-page'>Loading ...</main> : (
        <main className='main searh-page'>
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