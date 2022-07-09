import React from 'react';
import style from './kebab.module.scss';
import KebabMenuList from './KebabMenuList/KebabMenuList';

// function handlerKebab() {
//   return <KebabMenuList />;
// }
// Подход в целом верный, осталось тебе только сверстать это так, чтобы
// окно не появлялось непонятно где.
// А его появление завязать на стейт, и по клику на setState менять
// prevState
// (setState((state)=> !state))
// Ну и еще первый раз слышу про то, что такая реализация менюшки всплывающей
// называется кебаб)))))
const Kebab = () => {
  return (
    <button type="button" className={style.kebab_img}>
      <img src="icons/dots.svg" alt="" />
      {/* Ненужный знак ";""  */}
      <KebabMenuList />;
    </button>
  );
};

export default Kebab;
