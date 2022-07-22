import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';
import { getGoodsSelector } from '../../store/selector';
import style from './viewcardspage.module.scss';

const ViewCardPage = () => {
  const { id } = useParams();
  const [viewState, setViewState] = useState<IGoods | null>();
  const goodsList = useSelector(getGoodsSelector);
  console.log('goodsList', goodsList);

  useEffect(() => {
    setTimeout(() => {
      const result = goodsList.filter((goods) => id === goods.id);
      const [GoodsData] = result;
      setViewState(GoodsData);
    }, 1000);
  }, []);

  console.log(id);

  const { title, category, description } = viewState;

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
