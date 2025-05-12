const express = require('express');
const router = express.Router();
const correlationController = require('../controllers/correlation');

router.get('/stockcorrelation', correlationController.getStockCorrelation);

module.exports = router;
