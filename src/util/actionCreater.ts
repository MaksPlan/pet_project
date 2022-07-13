export enum ActionType {
  EDIT_CARD = 'EDIT_CARD',
  DELETE_CARD = 'DELETE_CARD',
  VIEW_CARD = 'VIEW_CARD',
}
export type ActionCreaterTypeName =
  | ActionType.DELETE_CARD
  | ActionType.EDIT_CARD
  | ActionType.VIEW_CARD;

export function createAction(name: ActionCreaterTypeName, data: any) {
  return { type: name, payload: data };
}
