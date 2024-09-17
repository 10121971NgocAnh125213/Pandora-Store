const express = require('express');
const router = express.Router();
const salebillController = require('../controllers/salebillController');

router.get('/api/getAllSaleBill', salebillController.getAllSaleBills);
router.get('/api/getSaleBill/:MaHDB', salebillController.getSaleBillById);

module.exports = router;