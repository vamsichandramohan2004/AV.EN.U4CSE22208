import express from 'express';
import cors from 'cors';
import stockService from '../be/services/stockservice.js'; // Assuming this file exists

const app = express();

// Enable CORS
app.use(cors());

// Define the route for stocks
app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await stockService.getAvailableStocks(); // Define this service
    res.json({ stocks });
  } catch (error) {
    console.error('Failed to fetch stocks:', error);
    res.status(500).json({ error: 'Failed to fetch stocks.' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
