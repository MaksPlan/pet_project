import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';
import Button from '../../shared/Button';
import { TGoods } from '../../store/interface';
import { getGoodsSelector } from '../../store/selector';
import { ActionType, editGoodsData } from '../../util/actionCreater';
import GoodsPage from '../Goods/GoodsPage';
import style from './editcardspage.module.scss';

const EditCardPage = () => {
  const dispatch = useDispatch();
  const getGoodsList = useSelector(getGoodsSelector);
  const [goodsTitle, setGoodsTitle] = useState('');
  const [goodCategory, setGoodCategory] = useState();
  const [telephone, setTelephone] = useState('');
  const [description, setDescription] = useState('');
  function saveGoodCard() {
    const goodCard = {
      id: getGoodsList.length + 1,
      title: goodsTitle,
      tel: telephone,
      email: 'sfgdsg@mail.com',
      description,
      category: goodCategory,
    };
    return dispatch(editGoodsData(goodCard));
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* <Button name="Сохранить" data={editGoodCard} /> */}
        <button type="button" onClick={() => saveGoodCard()}>
          <Link to="\" style={{ textDecoration: 'none' }}>
            Сохранить
          </Link>
        </button>

        <div className={style.input_big}>
          <input
            type="text"
            className={style.input_big}
            onChange={(e) => setGoodsTitle(e.target.value)}
          />
        </div>
        <div className={style.select}>
          <select
            name="categories"
            id=""
            className={style.input_medium}
            onCanPlay={(e) => console.log(e.target)}>
            <option value="tech">tech</option>
            <option value="jewelry">jewelry</option>
          </select>
          <input type="text" className={style.input_medium} />
        </div>
        <div>
          <input
            type="tel"
            placeholder="+7 (___) ___-____"
            data-mask="+7 (___) ___-____"
            className={style.input_medium}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className={style.input_big}
            placeholder="Введите текст (до 3000 символов)"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input type="file" className={style.input_big} onChange={(e) => e} />
        </div>
      </div>
    </div>
  );
};

export default EditCardPage;
