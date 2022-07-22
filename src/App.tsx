import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import EditCardPage from './entities/EditCardPage';
// import EditCardPage from './entities/EditCardPage';
import GoodsPage from './entities/Goods/GoodsPage';
import ViewCardPage from './entities/ViewCardPage';
// import TestPage from './entities/TestPage';
// import UsersPage from './entities/UsersPage';
// import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';
import { store } from './store/reducer';

const App = () => {
  return (
    <PageLayout>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<GoodsPage />} />
          <Route path="/edit/:id" element={<EditCardPage />} />
          <Route path="/view/:id" element={<ViewCardPage />} />
        </Routes>
      </Provider>
    </PageLayout>
  );
};

export default App;
