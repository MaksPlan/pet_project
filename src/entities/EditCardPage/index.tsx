import React from 'react';
import style from './editcardspage.module.scss';

const EditCardPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.input_big}>
          <input type="text" className={style.input_big} />
        </div>
        <div className={style.select}>
          <select name="categories" id="" className={style.input_medium}>
            <option value="clothes">clothes</option>
            <option value="tech">tech</option>
            <option value="jewelry">jewelry</option>
          </select>
          <input type="text" className={style.input_medium} />
        </div>
        <div>
          <input
            type="tel"
            value="+7 (___) ___-____"
            data-mask="+7 (___) ___-____"
            className={style.input_medium}
          />
        </div>
        <div>
          <input type="text" className={style.input_big} value="Введите текст (до 3000 символов)" />
        </div>
        <div>
          <input type="file" className={style.input_big} />
        </div>
      </div>
    </div>
  );
};

export default EditCardPage;
