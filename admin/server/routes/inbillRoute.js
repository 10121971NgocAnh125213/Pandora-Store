const express = require('express');
const router = express.Router();
const inbillController = require('../controllers/inbillController');

router.get('/api/getAllInBill', inbillController.getAllInBills);

module.exports = router;