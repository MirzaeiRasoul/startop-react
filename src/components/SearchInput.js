import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const clearQuery = decodeURIComponent(history.location.search.substring(3));
    setQuery(clearQuery);
  }, [history]);

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleEnterKeyEvent = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementsByClassName('search-button')[0].click();
    }
  }

  return (
    <div className='search-container'>
      <input className='search-input' placeholder='نام استارتاپ مورد نظر خود را وارد کنید.'
        value={query} onChange={handleSearchInputChange} onKeyUp={handleEnterKeyEvent} />
      <Link className='search-button flex align-center' to={{ pathname: '/search', search: `?q=${query}` }}>
        <MdSearch />
      </Link>
    </div>
  );
}

export default SearchInput;
