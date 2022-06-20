import React from 'react';
import ImgSelector from '../../img/ImgSelector';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.main_header}>
      <div className={style.page_header}>
        <div className={style.container}>
          <ImgSelector id="logo" />
          <h1 className={style.page_header_h1}>СТИКЕР</h1>
        </div>
        <div className={style.container}>
          <ImgSelector id="profil_logo" />
          <h2 className={style.page_header_h2}>Профиль</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
