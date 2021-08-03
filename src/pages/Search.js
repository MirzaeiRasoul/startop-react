import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ResultHeader from '../components/ResultHeader';

const Home = (props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const clearQuery = decodeURIComponent(props.location.search.substring(3));

    // var options = {
    //   method: 'GET',
    //   url: 'https://bing-web-search1.p.rapidapi.com/search',
    //   params: {
    //     q: clearQuery,
    //     freshness: 'Day',
    //     textFormat: 'Raw',
    //     safeSearch: 'Off',
    //     mkt: 'en-us'
    //   },
    //   headers: {
    //     'x-bingapis-sdk': 'true',
    //     'x-rapidapi-key': 'a4f4710c83msh34c91eaef4b2d98p133095jsna76cccf9ca5b',
    //     'x-rapidapi-host': 'bing-web-search1.p.rapidapi.com'
    //   }
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    setQuery(clearQuery);
  }, [props.location.search]);

  const datas = [
    { title: 'کوئیز آف کینگز', desciption: 'بازی آنلاین در سبک رقابتی و معمایی' },
    { title: 'زرین پال', desciption: 'سامانه ارائه راه‌کارها و خدمات پرداخت آنلاین' },
    { title: 'ویدوآل', desciption: 'بستر تولید و ارائه آموزش‌های متنی، صوتی و ویدئویی' },
    { title: 'الوپیک', desciption: 'اپلیکیشن درخواست پیک موتوری برای جابجایی یا ارسال مرسوله' },
    { title: 'نوبان', desciption: 'سامانه نوبت دهی آنلاین مطب و مراکز درمانی، فراخوان و مشاوره آنلاین' },
    { title: 'کوئیز آف کینگز', desciption: 'بازی آنلاین در سبک رقابتی و معمایی' },
    { title: 'زرین پال', desciption: 'سامانه ارائه راه‌کارها و خدمات پرداخت آنلاین' },
    { title: 'ویدوآل', desciption: 'بستر تولید و ارائه آموزش‌های متنی، صوتی و ویدئویی' },
    { title: 'الوپیک', desciption: 'اپلیکیشن درخواست پیک موتوری برای جابجایی یا ارسال مرسوله' },
    { title: 'نوبان', desciption: 'سامانه نوبت دهی آنلاین مطب و مراکز درمانی، فراخوان و مشاوره آنلاین' },
  ]

  return (
    <React.Fragment>
      <ResultHeader query={query} />
      <main className="main searh-page">
        <div className="main-panel">
          <div className="main-panel-header">

          </div>
          <div className="main-panel-list">
            {datas.map((startup, index) => (
              <div className="result-item" key={index+1}>
                <div className="result-image">
                  <img src={require(`../img/startups/logo${index%5+1}.png`)} alt={`logo${index+1}`} />
                </div>
                <div className="result-content">
                  <div className="result-title">{startup.title}</div>
                  <div className="result-description">{startup.desciption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="left-panel">

        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;