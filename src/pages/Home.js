import React from 'react';
import { SearchInput } from '../components';

const Home = () => {
  return (
    <React.Fragment>
      <main className='main'>
        <div className='main-content'>
          <span className='main-title'>استارتآپ</span>
          <span className='main-description'>موتور جستجوی تخصصی استارتاپی ایران</span>
          <SearchInput />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;