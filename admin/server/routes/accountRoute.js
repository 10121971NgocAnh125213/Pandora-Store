const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/api/getAllAccount', accountController.getAllAccounts);
router.get('/api/getAccount/:MaTaiKhoan', accountController.getAccountById);
router.post('/api/createAccount', accountController.createAccount);
router.put('/api/updateAccount/:MaTaiKhoan', accountController.updateAccount);
router.delete('/api/deleteAccount/:MaTaiKhoan', accountController.deleteAccount);

module.exports = router;