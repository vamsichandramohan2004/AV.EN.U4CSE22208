const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockcontroller');

router.get('/stocks/:ticker', stockController.getAveragePrice);

module.exports = router;
