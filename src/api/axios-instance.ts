import axios from 'axios';
import IGoods from '../interfaces/IGoods';
import { TGoods } from '../store/interface';

const baseUrl = 'https://fakestoreapi.com/products';

export const $api = axios.create({
  timeout: 1000,
  baseURL: baseUrl,
  headers: {
    Authorization: '',
  },
});

export const getGoodsData = () => {
  return axios.get(`${$api}`);
};

export const sendGoodsData = (data: TGoods | IGoods) => {
  return axios.post(`${$api}`, data);
};

export const changeGoodsData = (data: TGoods | IGoods) => {
  return axios.put(`${$api}`, data);
};

export const deleteGoods = () => {
  return axios.delete(`${$api}`);
};
