import '../styles/home.css';
import logo from '../img/logo.png';
import { MdSearch } from 'react-icons/md';

export default function Home () {
  return (
    <div className="container">
      <div className="background"></div>
      <div className="background-cover"></div>
      <header className="header">
        <ul className="menu">
          <li className="menu-item active"><a href="#">خانه</a></li>
          <li className="menu-item"><a href="#">استارتاپ</a></li>
          <li className="menu-item"><a href="#">تماس با ما</a></li>
          <li className="menu-item"><a href="#">درباره ما</a></li>
        </ul>
        <img className="logo" src={logo} />
      </header>
      <main className="main">
        <div className="main-content">
          <span className="main-title">استارتآپ</span>
          <span className="main-description">موتور جستجوی تخصصی استارتاپی ایران</span>
          <div className="search-container">
            <input className="search-input" placeholder="نام استارتاپ مورد نظر خود را وارد کنید."/>
            <button className="search-button"><MdSearch /></button>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div>
          <span>کلیه حقوق این سایت متعلق به شرکت نوقصان می‌باشد.</span>
        </div>
        <span>Copyright @ 2020 Noughsun</span>
      </footer>
    </div>
  );
}
