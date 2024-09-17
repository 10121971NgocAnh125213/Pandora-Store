const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/api/getAllProd', productController.getAllProducts);
router.get('/api/getProd/:MaSanPham', productController.getProductById);
router.post('/api/createProd', productController.createProduct);
router.put('/api/updateProd/:MaSanPham',productController.updateProduct);
router.delete('/api/deleteProd/:MaSanPham', productController.deleteProduct);
router.get('/api/searchsp/:searchTerm', productController.searchProductByName);
module.exports = router;