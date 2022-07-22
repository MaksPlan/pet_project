import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
// import EditCardPage from './entities/EditCardPage';
import GoodsPage from './entities/Goods/GoodsPage';
import ViewCardPage from './entities/ViewCardPage';
// import TestPage from './entities/TestPage';
// import UsersPage from './entities/UsersPage';
// import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';
import { store } from './store/reducer';

const LazyEditCardPage = React.lazy(() => import('./entities/EditCardPage'));
const LazyViewPage = React.lazy(() => import('./entities/ViewCardPage'));

const App = () => {
  return (
    <PageLayout>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<GoodsPage />} />
          <Route path="/edit/:id" element={<LazyEditCardPage />} />
          <Route path="/view/:id" element={<LazyViewPage />} />
        </Routes>
      </Provider>
    </PageLayout>
  );
};

export default App;
