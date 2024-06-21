// src/services/order.js
import axios from "axios";

const API_URL = "http://example.com/api/orders/";

const createOrder = (orderData) => {
  return axios.post(API_URL, orderData);
};

const getOrder = (orderId) => {
  return axios.get(API_URL + orderId);
};

export default {
  createOrder,
  getOrder,
};
