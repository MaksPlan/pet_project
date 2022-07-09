import React, { useState } from 'react';
import style from './kebab.module.scss';
import KebabMenuList from './KebabMenuList/KebabMenuList';

// Подход в целом верный, осталось тебе только сверстать это так, чтобы
// окно не появлялось непонятно где.
// А его появление завязать на стейт, и по клику на setState менять
// prevState
// (setState((state)=> !state))
// Ну и еще первый раз слышу про то, что такая реализация менюшки всплывающей
// называется кебаб)))))
const Kebab = () => {
  const [kebabState, setKebabState] = useState(false);
  // const [menuArr, setMenuArr] = useState([]);
  function showKebab() {
    setKebabState((state) => !state);
  }

  return (
    <button type="button" className={style.kebab_img} onClick={() => showKebab()}>
      <div className={style.palce_kebab}>{kebabState ? <KebabMenuList /> : false} </div>

      <img src="icons/dots.svg" alt="" />
    </button>
  );
};

export default Kebab;
