import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

import Header from '../components/Header';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleEnterKeyEvent = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementsByClassName("search-button")[0].click();
    }
  }

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <div className="main-content">
          <span className="main-title">استارتآپ</span>
          <span className="main-description ">موتور جستجوی تخصصی استارتاپی ایران</span>
          <div className="search-container">
            <input className="search-input" placeholder="نام استارتاپ مورد نظر خود را وارد کنید."
              value={query} onChange={handleSearchInputChange} onKeyUp={handleEnterKeyEvent} />
            <Link class="search-button" to={{ pathname: '/search', search: `?q=${query}` }}>
              <MdSearch />
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;