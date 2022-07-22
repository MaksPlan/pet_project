import React, { FC, useTransition } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionType, deleteCard } from '../../../util/actionCreater';
import style from './kebabmenulist.module.scss';

interface IProps {
  id: number;
}

const KebabMenuList: FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  function removeCard() {
    dispatch(deleteCard(ActionType.DELETE_CARD, id));
  }

  return (
    <ul className={style.container}>
      <li>
        <img src="icons/eye.svg" alt="" className={style.kebab_img} />
        <Link to={`/view/${id}`} style={{ textDecoration: 'none' }}>
          <button type="button">Просмотреть</button>
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
        <button type="button" onClick={() => removeCard()}>
          Удалить
        </button>
      </li>
    </ul>
  );
};

export default KebabMenuList;
