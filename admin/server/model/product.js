const db = require('../config/config');

const Product = {                                                                                   //đối tượng
    getAll: (callback) => {                                                                         //phương thức
        const sqlGet = "SELECT * FROM sanpham";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (MaSanPham, callback) => {
        const sqlGet = "SELECT * FROM sanpham WHERE MaSanPham = ?";
        db.query(sqlGet, [MaSanPham], (error, result) => {
            if (error) {
                return callback(errorr);
            }
            callback(null, result);
        });
    },
    create: (productData, callback) => {
        const {MaDanhMuc, TenSanPham, Gia, SoLuong, MauSac, MoTa, HinhAnh} = productData;
        const sqlInsert = "INSERT INTO SanPham (MaDanhMuc, TenSanPham, Gia, SoLuong, MauSac, MoTa, HinhAnh) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sqlInsert, [MaDanhMuc, TenSanPham, Gia, SoLuong, MauSac, MoTa, HinhAnh], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    update: (MaSanPham, productData, callback) => {
        const {MaDanhMuc, TenSanPham, Gia, SoLuong, MauSac, MoTa, HinhAnh} = productData;
        const sqlUpdate = "UPDATE sanpham SET MaDanhMuc = ?, TenSanPham = ?, Gia = ?, SoLuong = ?, MauSac = ?, MoTa = ?, HinhAnh = ? WHERE MaSanPham = ?";
        db.query(sqlUpdate, [MaDanhMuc, TenSanPham, Gia, SoLuong, MauSac, MoTa, HinhAnh, MaSanPham], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    delete: (MaSanPham, callback) => {
        const sqlDelete = "DELETE FROM sanpham WHERE MaSanPham = ?";
        db.query(sqlDelete, [MaSanPham], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    searchByName: (searchTerm, callback) => {
        const sqlSearch = "SELECT * FROM sanpham WHERE TenSanPham LIKE ?";
        const formattedSearchTerm = `%${searchTerm}%`; // Tìm kiếm gần đúng
        db.query(sqlSearch, [formattedSearchTerm], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Product;