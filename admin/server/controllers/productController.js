const Product = require('../model/product');

exports.getAllProducts = (req, res) => {
    Product.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getProductById = (req, res) => {   
    const { MaSanPham } = req.params;    
    Product.getById(MaSanPham, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createProduct = (req, res) => {
    const productData = req.body;
    Product.create(productData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Product added successfully");
    });
};

exports.updateProduct = (req, res) => {
    const { MaSanPham } = req.params;
    const productData = req.body;
    Product.update(MaSanPham, productData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Product updated successfully");
    });
};

exports.deleteProduct = (req, res) => {
    const { MaSanPham } = req.params;
    Product.delete(MaSanPham, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Product deleted successfully");
    });
};

// Hàm mới để tìm kiếm gần đúng theo tên sản phẩm
exports.searchProductByName = (req, res) => {
    const { searchTerm } = req.params; // Lấy search term từ URL params
    Product.searchByName(searchTerm, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};
