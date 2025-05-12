const stockService = require('../services/stockservice');
const { calculateAverage } = require('../utils/correlation');

exports.getAveragePrice = async (req, res) => {
  const { ticker } = req.params;
  const { minutes } = req.query;

  try {
    const prices = await stockService.getStockPriceHistory(ticker, minutes);
    const average = calculateAverage(prices);

    res.json({
      averageStockPrice: average,
      priceHistory: prices
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
