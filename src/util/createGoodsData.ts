import IGoods from '../interfaces/IGoods';

export function createGoodsData(arr: IGoods[]) {
  let newArr = [];
  newArr = arr.map((obj) => {
    return { ...obj, date: new Date(2022, 6, 15).toDateString() };
  });
  return newArr;
}
