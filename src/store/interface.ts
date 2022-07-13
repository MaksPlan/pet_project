import IGoods from '../interfaces/IGoods';
import { ActionCreaterTypeName } from '../util/actionCreater';

export interface IGoodsState {
  goods: IGoods[] | Array<null>;
}

export interface ActionGoodsCard {
  type: ActionCreaterTypeName;
  payload?: any;
}
