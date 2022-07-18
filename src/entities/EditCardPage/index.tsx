import React from 'react';
import { useDispatch } from 'react-redux';
import IGoods from '../../interfaces/IGoods';
import { ActionType } from '../../util/actionCreater';
import style from './editcardspage.module.scss';

const EditCardPage = () => {
  const dispatch = useDispatch();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> // | ChangeEvent<HTMLSelectElement>
  ): IGoods => {
    const goodCard = {};
    return goodCard;
  };
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.input_big}>
          <input
            type="text"
            className={style.input_big}
            // лучше вынести в хэндлер перед return
            // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {...}
            // и передавать уже его в onChange
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className={style.select}>
          <select name="categories" id="" className={style.input_medium}>
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
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            className={style.input_big}
            value="Введите текст (до 3000 символов)"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div>
          <input type="file" className={style.input_big} onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
    </div>
  );
};

export default EditCardPage;
