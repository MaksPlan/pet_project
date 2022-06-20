import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';
import ImgSelector from '../../img/ImgSelector';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <div className={style.admin}>
        <ImgSelector id="admin" />
        <div className={style.admin_block}>
          <h2>Super admin</h2>
          <h3>Админ-меню</h3>
        </div>
      </div>
      <hr />
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <li>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
