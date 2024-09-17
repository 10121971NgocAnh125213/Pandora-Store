const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

router.get('/api/getAllStaff', staffController.getAllStaffs);
router.get('/api/getStaff/:MaNhanVien', staffController.getStaffById);
router.post('/api/createStaff', staffController.createStaff);
router.put('/api/updateStaff/:MaNhanVien', staffController.updateStaff);
router.delete('/api/deleteStaff/:MaNhanVien', staffController.deleteStaff);

module.exports = router;