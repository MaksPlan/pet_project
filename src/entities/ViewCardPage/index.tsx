import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';
import { getGoodsSelector } from '../../store/selector';
import style from './viewcardspage.module.scss';

const ViewCardPage = () => {
  const { id } = useParams();
  const goodsList = useSelector(getGoodsSelector);
  // console.log('goodsList', goodsList);
  const findGood = (): IGoods => {
    const result = goodsList.filter((goods) => id === goods.id);

    return result[0];
  };

  const GoodsData = findGood();
  console.log(GoodsData);
  const { title, category, description } = GoodsData;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.input_big}>
          <h2 className={style.input_big}>{title}</h2>
        </div>
        <div className={style.select}>
          <h3 className={style.input_medium}>{category}</h3>
          <input type="text" className={style.input_medium} />
        </div>
        <div>
          <h4 className={style.input_medium}> some telephone + 7 XXX XXX XX XX</h4>
        </div>
        <div>
          <p className={style.input_big}>{description}</p>
        </div>
        <div>
          <input type="file" className={style.input_big} />
        </div>
      </div>
    </div>
  );
};

export default ViewCardPage;
