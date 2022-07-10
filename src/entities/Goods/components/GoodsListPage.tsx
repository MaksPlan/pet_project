import React, { FC } from 'react';
import IGoods from '../../../interfaces/IGoods';
import SearchInput from '../../../shared/searchInput';
import GoodsCard from './GoodsCard';
import style from './goodslistpage.module.scss';

interface IProps {
  arr: IGoods[];
}
const GoodsListPage: FC<IProps> = ({ arr }) => {
  return (
    <div className={style.contaner}>
      <SearchInput arr={arr} />
      <div className={style.card_box}>
        <p>Название объявления</p>
        <p>Категория</p>
        <p>Дата публикации</p>
      </div>
      <div className={style.page_cards}>
        {arr.map((stuff) => {
          return (
            <GoodsCard
              title={stuff.title || ''}
              date={stuff.date || '20 april 2022'}
              category={stuff.category || ''}
              id={stuff.id || 100}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GoodsListPage;
