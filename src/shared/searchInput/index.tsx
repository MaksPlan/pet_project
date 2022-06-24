import React, { FC, useState } from 'react';
import IGoods from '../../interfaces/IGoods';
import style from './searchinput.module.scss';

interface IProps {
  arr: IGoods[];
}

const SearchInput: FC<IProps> = ({ arr }) => {
  const [filltredArr, setFiltred] = useState(arr);

  function filter(event: React.FocusEvent<HTMLInputElement>) {
    setFiltred(arr.filter((obj) => obj.category === event.target.value));
  }
  return (
    <form action="input">
      <input className={style.search} type="text" placeholder="Search" onChange={filter} />;
    </form>
  );
};

export default SearchInput;
