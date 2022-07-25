import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import IGoods from '../../interfaces/IGoods';
import { ActionType, addGoodsData } from '../../util/actionCreater';
import style from './searchinput.module.scss';

interface IProps {
  arr: IGoods[];
}

const SearchInput: FC<IProps> = ({ arr }) => {
  const [filltredArr, setFiltred] = useState(arr);
  const dispatch = useDispatch();

  function filter(event: React.ChangeEvent<HTMLInputElement>) {
    setFiltred(arr.filter((obj) => obj.title?.split(' ').includes(event.target.value)));
    dispatch(addGoodsData(ActionType.ADD_CARD, filltredArr));
    console.log(filltredArr);
  }
  return (
    <form action="input">
      <input
        className={style.search}
        type="text"
        placeholder="Search"
        onChange={(event) => filter(event)}
      />
      ;
    </form>
  );
};

export default SearchInput;
