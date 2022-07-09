import { configureStore } from '@reduxjs/toolkit';
import IGoods from '../interfaces/IGoods';
import Goods from '../mocks/mockedGoods';

const initialState: IGoods[] = [];

// Несемантичное название редьюсера, это как переменную назвать Variable или Data, а компонент - Component
export const reducer = (state = initialState, action: any, payload?: IGoods, i?: number) => {
  let card = {};
  switch (action.type) {
    case 'EditCard':
      card = {
        id: payload?.id || null,
        titile: payload?.title || null,
        price: payload?.price || null,
        category: payload?.category || null,
        description: payload?.date || null,
        date: '20 april 2022',
      };
      return [...state, card];
    // case 'ViewCards':
    //   return state.[i]
    default:
      // Лишний дизейбл линтов
      // eslint-disable-next-line consistent-return
      return state;
  }
};

export const store = configureStore({ reducer });
