import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IGoods from '../../interfaces/IGoods';
import mockedGoods from '../../mocks/mockedGoods';
import { url } from '../../mocks/urlGoods';
import { IGoodsState } from '../../store/interface';
import { getGoodsSelector } from '../../store/selector';
import { ActionType, createAction } from '../../util/actionCreater';
import { createGoodsData } from '../../util/createGoodsData';
import GoodsListPage from './components/GoodsListPage';

const GoodsPage = () => {
  const dispatch = useDispatch();
  const goodsListArray = useSelector(getGoodsSelector);

  const [goodsData, setGoodsData] = useState<IGoods[] | null>(null);
  const getGoodsRequest = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(createAction(ActionType.EDIT_CARD, data));
    } catch (error) {
      console.log(error);
      dispatch(createAction(ActionType.EDIT_CARD, mockedGoods));
    }
  };

  useEffect(() => {
    getGoodsRequest();
  }, []);

  if (!goodsListArray) {
    return <div>Loading</div>;
  }
  return <GoodsListPage arr={goodsListArray} />;
};

export default GoodsPage;
