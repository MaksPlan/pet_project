import { IGoodsState } from './interface';

export const getGoodsSelector = (state: IGoodsState) => state.goods;
export const getGoodsCard = (state: IGoodsState, id: number) =>
  state.goods.filter((goods) => id === goods.id);
