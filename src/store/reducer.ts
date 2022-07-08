import { configureStore } from '@reduxjs/toolkit';
import IGoods from '../interfaces/IGoods';
import Goods from '../mocks/mockedGoods';

const initialState: IGoods = {};

const reducer = (state = initialState, action: any, payload?: IGoods) => {
  switch (action.type) {
    case 'EditCard':
      return {
        ...state,
        id: payload?.id || null,
        titile: payload?.title || null,
        price: payload?.price || null,
        category: payload?.category || null,
        description: payload?.date || null,
        date: '20 april 2022',
      };
    case 'ViewCards':
      return {
        ...state,
        id: payload?.id,
        titile: payload?.title,
        price: payload?.price,
        category: payload?.category,
        description: payload?.date,
        date: '20 april 2022',
      };
    default:
      // eslint-disable-next-line consistent-return
      return state;
  }
};

export const store = configureStore(
  {reducer: reducer}
);
