// services/stockservice.js
const axios = require('axios');
const { BASE_URL, TOKEN } = require('../config');

const headers = {
  Authorization: `Bearer ${TOKEN}`
};

exports.getStocksList = async () => {
  try {
    const res = await axios.get(BASE_URL, { headers });
    return res.data.stocks;
  } catch (error) {
    console.error('Error fetching stocks list:', error);
    throw error;
  }
};

exports.getStockPriceHistory = async (ticker, minutes) => {
  try {
    const url = `${BASE_URL}/${ticker}${minutes ? `?minutes=${minutes}` : ''}`;
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (error) {
    console.error('Error fetching stock price history:', error);
    throw error;
  }
};