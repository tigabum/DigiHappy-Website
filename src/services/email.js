// src/services/email.js
import axios from "axios";

const API_URL = "http://example.com/api/email/";

const sendEmail = (emailData) => {
  return axios.post(API_URL + "send", emailData);
};

export default {
  sendEmail,
};
