import React from 'react';
import IGoods from '../../../interfaces/IGoods';
import style from './viewcardspage.module.scss';

const InnerViewPage = ({ viewState }: { viewState: IGoods }) => {
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
      </div>
    </div>
  );
};

export default InnerViewPage;
