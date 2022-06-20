import React from 'react';
import ImgSelector from '../../img/ImgSelector';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.main_footer}>
      <div className={style.page_footer}>
        <div className={style.container}>
          <ImgSelector id="logo" />
          <h1 className={style.page_h1}>СТИКЕР</h1>

          <h3>Доска объявлений </h3>
        </div>
        <div className={style.container}>
          <p>© ООО «Доска диджитал», 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
