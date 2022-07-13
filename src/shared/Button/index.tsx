import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';

interface IButton {
  name: string;
  cardToPayload: IGoods;
}

const Button: FC<IButton> = ({ name, cardToPayload }) => {
  const dispatch = useDispatch();
  function editNewCard(card: IGoods) {
    dispatch({ type: 'EDIT_CARD', payload: card });
  }
  function addNewCard() {
    dispatch({ type: 'EDIT_CARD' });
    return <Link to={`/edit/${Date.now()}`} style={{ textDecoration: 'none' }} />;
  }
  function makeNewCard() {
    return name === 'Сохранить' ? editNewCard(cardToPayload) : addNewCard();
  }

  return (
    <button type="button" onClick={() => makeNewCard()}>
      {name}
    </button>
  );
};
