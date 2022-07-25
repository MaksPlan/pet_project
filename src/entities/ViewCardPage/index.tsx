import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IGoods from '../../interfaces/IGoods';
import { url } from '../../mocks/urlGoods';
import InnerViewPage from './InnerViewPage';
import ant from './viewcardspage.module.scss';

const ViewCardPage = () => {
  const { id } = useParams();
  const [viewState, setViewState] = useState<IGoods | null>();
  // const goodsList = useSelector(getGoodsSelector);

  console.log('viewState', viewState);
  const mockedGoodsRequest = async () => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();

    console.log('id:', id, 'data:', data);
    setViewState(data);
  };

  useEffect(() => {
    setTimeout(() => {
      mockedGoodsRequest();
    }, 1000);
  }, []);

  return !viewState ? (
    <div>
      <Spin />
    </div>
  ) : (
    <InnerViewPage viewState={viewState} />
  );
};

export default ViewCardPage;
