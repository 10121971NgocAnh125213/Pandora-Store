const db = require('../config/config');

const Category = {
    getAll: (callback) => {
        const sqlGet = "SELECT * FROM danhmuc";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (MaDanhMuc, callback) => {
        const sqlGet = "SELECT * FROM danhmuc WHERE MaDanhMuc = ?";
        db.query(sqlGet, MaDanhMuc, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    create: (categoryData, callback) => {
        const {TenDanhMuc} = categoryData;
        const sqlInsert = "INSERT INTO danhmuc (TenDanhMuc) VALUES (?)";
        db.query(sqlInsert, [TenDanhMuc], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    update: (MaDanhMuc, categoryData, callback) => {
        const {TenDanhMuc} = categoryData;
        const sqlUpdate = "UPDATE danhmuc SET TenDanhMuc = ? WHERE MaDanhMuc = ?";
        db.query(sqlUpdate, [TenDanhMuc, MaDanhMuc], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    delete: (MaDanhMuc, callback) => {
        const sqlDelete = "DELETE FROM danhmuc WHERE MaDanhMuc = ?";
        db.query(sqlDelete, MaDanhMuc, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Category;