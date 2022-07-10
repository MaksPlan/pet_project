import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './kebabmenulist.module.scss';

interface IProps {
  id: number;
}

const KebabMenuList: FC<IProps> = ({ id }) => {
  return (
    <ul className={style.container}>
      <li>
        <img src="icons/eye.svg" alt="" className={style.kebab_img} />
        <Link to={`/view/${id}`} style={{ textDecoration: 'none' }}>
          Просмотреть
        </Link>
      </li>
      <li>
        <img src="icons/pencil.svg" alt="" className={style.kebab_img} />
        <Link to={`/edit/${id}`} style={{ textDecoration: 'none' }}>
          Редактировать
        </Link>
      </li>
      <li>
        <img src="icons/trash.svg" alt="" className={style.kebab_img} />
        <p>Удалить</p>
      </li>
    </ul>
  );
};

export default KebabMenuList;
