const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/api/getAllCate', categoryController.getAllCategories);
router.get('/api/getCate/:MaDanhMuc', categoryController.getCategoryById);
router.post('/api/createCate', categoryController.createCategory);
router.put('/api/updateCate/:MaDanhMuc', categoryController.updateCategory);
router.delete('/api/deleteCate/:MaDanhMuc', categoryController.deleteCategory);

module.exports = router;