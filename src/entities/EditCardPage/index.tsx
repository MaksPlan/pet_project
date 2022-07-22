import { Spin } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
  const { id } = useParams();
  const [viewState, setViewState] = useState<IGoods | null>();
  const [goodsTitle, setGoodsTitle] = useState('');
  const [goodCategory, setGoodCategory] = useState();
  const [telephone, setTelephone] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const result = getGoodsList.filter((goods) => id === goods.id);
      const [GoodsData] = result;
      setViewState(GoodsData);
    }, 1000);
  }, []);
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
            value={goodsTitle}
            className={style.input_big}
            onChange={(e) => setGoodsTitle(e.target.value)}
          />
        </div>
        <div className={style.select}>
          <select
            name="categories"
            value={goodCategory}
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
            value={telephone}
            data-mask="+7 (___) ___-____"
            className={style.input_medium}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className={style.input_big}
            value={description}
            placeholder="Введите текст (до 3000 символов)"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input type="file" className={style.input_big} onChange={(e) => e} />
        </div>
      </div>
      {!getGoodsList ? <Spin spinning /> : null}
    </div>
  );
};

export default EditCardPage;
