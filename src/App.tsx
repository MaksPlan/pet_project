import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import GoodsPage from './entities/Goods/GoodsPage';
// import TestPage from './entities/TestPage';
// import UsersPage from './entities/UsersPage';
// import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <GoodsPage />
    </PageLayout>
  );
};

export default App;
