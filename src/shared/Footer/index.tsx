import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.main_footer}>
      <div className={style.page_footer}>
        <div className={style.container}>
          <div className={style.stiker}>
            <img src="img/logo.svg" alt="" />
            {/* <ImgSelector id="logo" /> */}
            <h1 className={style.page_h1}>СТИКЕР</h1>
          </div>

          <h3 className={style.h3}>Доска объявлений </h3>
        </div>
        <div className={style.container}>
          <p>© ООО «Доска диджитал», 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
