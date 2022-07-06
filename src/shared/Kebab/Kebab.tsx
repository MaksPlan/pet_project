import React from 'react';
import style from './kebab.module.scss';
import KebabMenuList from './KebabMenuList/KebabMenuList';

function handlerKebab() {
  return <KebabMenuList />;
}

const Kebab = () => {
  return (
    <button type="button" className={style.kebab_img} onClick={() => handlerKebab()}>
      <img src="icons/dots.svg" alt="" />
      <KebabMenuList />;
    </button>
  );
};

export default Kebab;
