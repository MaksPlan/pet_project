import React, { FC } from 'react';
import Kebab from '../../../shared/Kebab/Kebab';
import style from './goodscard.module.scss';

interface IProps {
  title: string;
  date: string;
  category: string;
}

const GoodsCard: FC<IProps> = ({ title, date, category }) => {
  return (
    <div className={style.card_box}>
      <p className={style.title}>
        <b>{title}</b>
      </p>
      <p>{category}</p>
      <p>{date}</p>
      <Kebab />
    </div>
  );
};

export default GoodsCard;
