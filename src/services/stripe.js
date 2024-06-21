// src/services/stripe.js
import axios from "axios";

const API_URL = "http://example.com/api/stripe/";

const createCheckoutSession = (sessionData) => {
  return axios.post(API_URL + "create-checkout-session", sessionData);
};

export default {
  createCheckoutSession,
};
