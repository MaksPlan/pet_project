import React, { FC } from 'react';
import IGoods from '../../../interfaces/IGoods';
import GoodsCard from './GoodsCard';
import style from './goodslistpage.module.scss';

interface IProps {
  arr: IGoods[];
}
const GoodsListPage: FC<IProps> = ({ arr }) => {
  return (
    <div className={style.contaner}>
      <div className={style.card_box}>
        <p>Название объявления</p>
        <p>Категория</p>
        <p>Дата публикации</p>
      </div>
      <div className={style.page_cards}>
        {arr.map((stuff) => {
          return <GoodsCard title={stuff.title} date={stuff.date} category={stuff.category} />;
        })}
      </div>
    </div>
  );
};

export default GoodsListPage;
