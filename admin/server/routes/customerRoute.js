const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/api/getAllCus', customerController.getAllCustomers);
router.get('/api/getCus/:MaKhachHang', customerController.getCustomerById);
router.post('/api/createCus', customerController.createCustomer);
router.put('/api/updateCus/:MaKhachHang',customerController.updateCustomer);
router.delete('/api/deleteCus/:MaKhachHang', customerController.deleteCustomer);

module.exports = router;