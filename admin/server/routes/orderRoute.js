const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/api/addOrder', orderController.addOrder);

module.exports = router;