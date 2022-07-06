import React from 'react';
import { Link } from 'react-router-dom';
import style from './kebabmenulist.module.scss';

const KebabMenuList = () => {
  return (
    <ul className={style.container}>
      <li>
        <button type="button">
          <img src="icons/eye.svg" alt="" className={style.kebab_img} />
          <Link to="/edit">Просмотреть</Link>
        </button>
      </li>
      <li>
        <button type="button">
          <img src="icons/pencil.svg" alt="" className={style.kebab_img} />
          <p>Редактировать</p>
        </button>
      </li>
      <li>
        <button type="button">
          <img src="icons/trach.svg" alt="" className={style.kebab_img} />
          <p>Удалить</p>
        </button>
      </li>
    </ul>
  );
};

export default KebabMenuList;
