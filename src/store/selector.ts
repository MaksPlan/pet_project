import { IGoodsState } from './interface';

export const getGoodsSelector = (state: IGoodsState) => state.goods;
