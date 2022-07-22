import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';
import { TGoods } from '../../store/interface';

interface IButton {
  name: string;
  data: TGoods | null;
}

const Button: FC<IButton> = ({ name, data }) => {
  const dispatch = useDispatch();
  function editNewCard() {
    dispatch({ type: 'EDIT_CARD', payload: data });
  }
  function addNewCard() {
    dispatch({ type: 'EDIT_CARD' });
    return <Link to={`/edit/${Date.now()}`} style={{ textDecoration: 'none' }} />;
  }
  function makeNewCard() {
    return name === 'Сохранить' ? editNewCard() : addNewCard();
  }

  return (
    <button type="button" onClick={() => makeNewCard()}>
      {name}
    </button>
  );
};

export default Button;
