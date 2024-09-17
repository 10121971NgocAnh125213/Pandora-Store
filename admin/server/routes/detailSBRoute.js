const express = require('express');
const router = express.Router();
const salebillController = require('../controllers/detailSBController');

router.get('/api/getDetailSB/:MaHDB', salebillController.getDetailSBById)


module.exports = router;