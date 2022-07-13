import { configureStore } from '@reduxjs/toolkit';
import IGoods from '../interfaces/IGoods';
import { ActionType } from '../util/actionCreater';
import { ActionGoodsCard, IGoodsState } from './interface';

const initialState = {
  goods: [],
};

export const reducerGlobal = (
  state: IGoodsState = initialState,
  action: ActionGoodsCard
): IGoodsState => {
  switch (action.type) {
    case ActionType.EDIT_CARD:
      return { ...state, goods: [...state.goods, action.payload] };
    case ActionType.VIEW_CARD:
      return state;
    case ActionType.DELETE_CARD:
      return {
        ...state,
        goods: state.goods.filter((good: IGoods) => good.id !== action.payload),
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducerGlobal,
});
