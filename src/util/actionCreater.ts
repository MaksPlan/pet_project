import IGoods from '../interfaces/IGoods';
// eslint-disable-next-line import/no-cycle
import { TGoods } from '../store/interface';

export enum ActionType {
  EDIT_CARD = 'EDIT_CARD',
  DELETE_CARD = 'DELETE_CARD',
  VIEW_CARD = 'VIEW_CARD',
  ADD_CARD = 'ADD_CARD',
}
export type ActionCreaterTypeName =
  | ActionType.DELETE_CARD
  | ActionType.EDIT_CARD
  | ActionType.VIEW_CARD
  | ActionType.ADD_CARD;

export function addGoodsData(name: ActionCreaterTypeName, data: IGoods[]) {
  return { type: name, payload: data };
}

export function deleteCard(name: ActionCreaterTypeName, data: number) {
  return { type: name, payload: data };
}
export function editGoodsData(data: TGoods) {
  return { type: ActionType.EDIT_CARD, payload: data };
}
