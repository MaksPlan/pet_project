import React, { FC } from 'react';
import Kebab from '../../../shared/Kebab/Kebab';
import style from './goodscard.module.scss';

interface IProps {
  title: string;
  date: string;
  category: string;
  id: number;
}

const GoodsCard: FC<IProps> = ({ title, date, category, id }) => {
  return (
    <div className={style.card_box}>
      <p className={style.title}>
        <b>{title}</b>
      </p>
      <p>{category}</p>
      <p>{date}</p>
      <Kebab id={id} />
    </div>
  );
};

export default GoodsCard;
