import IGoods from '../interfaces/IGoods';

export function createGoodsData(arr: IGoods[]) {
  let newArr = [];
  newArr = arr.map((obj) => {
    // eslint-disable-next-line no-multi-assign
    const date = (obj.date = new Date(2022, 6, 20).toDateString());
    return { ...obj, date };
  });
  return newArr;
}
