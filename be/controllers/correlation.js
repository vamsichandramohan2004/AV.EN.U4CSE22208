import stockService from '../services/stockservice.js';
import { calculateAverage, calculateCorrelation } from '../utils/correlation.js';


export const getStockCorrelation = async (req, res) => {
  const { minutes, ticker } = req.query;
  if (!ticker || ticker.length !== 2) {
    return res.status(400).json({ error: 'Exactly 2 tickers required.' });
  }

  try {
    const [ticker1, ticker2] = ticker;
    const [data1, data2] = await Promise.all([
      stockService.getStockPriceHistory(ticker1, minutes),
      stockService.getStockPriceHistory(ticker2, minutes)
    ]);

    const correlation = calculateCorrelation(data1, data2);

    res.json({
      correlation,
      stocks: {
        [ticker1]: {
          averagePrice: calculateAverage(data1),
          priceHistory: data1
        },
        [ticker2]: {
          averagePrice: calculateAverage(data2),
          priceHistory: data2
        }
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
