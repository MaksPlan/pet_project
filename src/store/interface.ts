import IGoods from '../interfaces/IGoods';
import { ActionCreaterTypeName } from '../util/actionCreater';

export interface IGoodsState {
  goods: IGoods[];
}

export interface ActionGoodsCard {
  type: ActionCreaterTypeName;
  payload?: any;
}

export type TGoods = {
  id: number;
  title: string;
  tel: string;
  email: string;
  description: string;
  category?: string;
};
