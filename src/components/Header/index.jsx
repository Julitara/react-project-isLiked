import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header} id="header" aria-label="Верхнее меню сайта">
      <div className={style.container}>
        <nav className={style.header__nav}>
          <div className={style.header__nav_link}>
            <Link to="/">
              <p>Главная</p>
            </Link>
          </div>
          <div className={style.header__nav_link}>
            <Link to="/products">
              <p>Страница товаров</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
