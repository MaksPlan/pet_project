import { configureStore } from '@reduxjs/toolkit';
import IGoods from '../interfaces/IGoods';
import Goods from '../mocks/mockedGoods';

const initialState: IGoods[] = Goods;

// Несемантичное название редьюсера, это как переменную назвать Variable или Data, а компонент - Component
export const reducerGlobal = (state = initialState, action: any, payload?: IGoods) => {
  let card = {};
  switch (action.type) {
    case 'EditCard':
      card = {
        id: payload?.id,
        titile: payload?.title,
        price: payload?.price,
        category: payload?.category,
        description: payload?.date,
        date: '20 april 2022',
      };
      return [...state, card];
    case 'ViewCard':
      return state;
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducerGlobal,
});
