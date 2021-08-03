import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MdSearch } from 'react-icons/md';

const ResultHeader = (props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(props.query);
  }, [props.query]);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <header className="header result-header">
      <div className="search-container">
        <input className="search-input" placeholder="نام استارتاپ مورد نظر خود را وارد کنید." value={query} onChange={handleSearchInputChange} />
        <Link class="search-button" to={{ pathname: '/search', search: `?q=${query}` }}>
          <MdSearch />
        </Link>
      </div>
      <Link to={'/'}><img className="logo" src={require('../img/logo.png')} alt="logo" /></Link>
    </header>
  );
}

export default ResultHeader;