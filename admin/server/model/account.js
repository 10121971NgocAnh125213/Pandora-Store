const db = require('../config/config');

const Account = {
    getAll: (callback) => {
        const sqlGet = "SELECT * FROM taikhoan";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (MaTaiKhoan, callback) => {
        const sqlGet = "SELECT * FROM taikhoan WHERE MaTaiKhoan = ?";
        db.query(sqlGet, MaTaiKhoan, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    create: (accountData, callback) => {
        const {MaLoaiTK, TenTaiKhoan, MatKhau} = accountData;
        const sqlInsert = "INSERT INTO taikhoan (MaLoaiTK, TenTaiKhoan, MatKhau) VALUES (?, ?, ?)";
        db.query(sqlInsert, [MaLoaiTK, TenTaiKhoan, MatKhau], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    update: (MaTaiKhoan, accountData, callback) => {
        const {MaLoaiTK, TenTaiKhoan, MatKhau} = accountData;
        const sqlUpdate = "UPDATE taikhoan SET MaLoaiTK = ?, TenTaiKhoan = ?, MatKhau = ? WHERE MaTaiKhoan = ?";
        db.query(sqlUpdate,[MaLoaiTK, TenTaiKhoan, MatKhau, MaTaiKhoan], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    delete: (MaTaiKhoan, callback) => {
        const sqlDelete = "DELETE FROM taikhoan WHERE MaTaiKhoan = ?";
        db.query(sqlDelete, MaTaiKhoan, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Account;