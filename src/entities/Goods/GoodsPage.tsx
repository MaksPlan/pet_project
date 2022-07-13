import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import IGoods from '../../interfaces/IGoods';
import mockedGoods from '../../mocks/mockedGoods';
import { url } from '../../mocks/urlGoods';
import { ActionType, createAction } from '../../util/actionCreater';
import { createGoodsData } from '../../util/createGoodsData';
import GoodsListPage from './components/GoodsListPage';

const GoodsPage = () => {
  const dispatch = useDispatch();
  const [goodsData, setGoodsData] = useState<IGoods[] | null>(null);
  const getGoodsRequest = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const newData = createGoodsData(data);
      setGoodsData(newData);
    } catch (error) {
      console.log(error);
      setGoodsData(mockedGoods);
    }
  };

  useEffect(() => {
    getGoodsRequest();
  }, []);
  if (!goodsData) {
    return <div>Loading</div>;
  }
  dispatch(createAction(ActionType.EDIT_CARD, goodsData));
  return <GoodsListPage arr={goodsData} />;
};
export default GoodsPage;
