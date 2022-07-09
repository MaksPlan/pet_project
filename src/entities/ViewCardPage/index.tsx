import React from 'react';
import style from './viewcardspage.module.scss';

const ViewCardPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.input_big}>
          <h2
            className={style.input_big}
            // лучше вынести в хэндлер перед return
            // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {...}
            // и передавать уже его в onChange
          >
            Some heading
          </h2>
        </div>
        <div className={style.select}>
          <h3 className={style.input_medium}>Some categories</h3>
          <input type="text" className={style.input_medium} />
        </div>
        <div>
          <h4 className={style.input_medium}> some telephone + 7 XXX XXX XX XX</h4>
        </div>
        <div>
          <p className={style.input_big}>Some description</p>
        </div>
        <div>
          <input type="file" className={style.input_big} />
        </div>
      </div>
    </div>
  );
};

export default ViewCardPage;
