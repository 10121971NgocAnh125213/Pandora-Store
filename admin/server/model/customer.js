const db = require('../config/config');

const Customer = {
    getAll: (callback) => {
        const sqlGet = "SELECT * FROM khachhang";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (MaKhachHang, callback) => {
        const sqlGet = "SELECT * FROM khachhang WHERE MaKhachHang = ?";
        db.query(sqlGet, MaKhachHang, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    create: (customerData, callback) => {
        const {TenKhachHang, GioiTinh, DiaChi, Sdt} = customerData;
        const sqlInsert = "INSERT INTO khachhang (TenKhachHang, GioiTinh, DiaChi, Sdt) VALUES (?, ?, ?, ?)";
        db.query(sqlInsert, [TenKhachHang, GioiTinh, DiaChi, Sdt], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    update: (MaKhachHang, customerData, callback) => {
        const {TenKhachHang, GioiTinh, DiaChi, Sdt} = customerData;
        const sqlUpdate = "UPDATE khachhang SET TenKhachHang= ?, GioiTinh= ?, Sdt= ?, DiaChi= ? WHERE MaKhachHang = ?";
        db.query(sqlUpdate,[ TenKhachHang, GioiTinh, Sdt, DiaChi,MaKhachHang], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    delete: (MaKhachHang, callback) => {
        const sqlDelete = "DELETE FROM khachhang WHERE MaKhachHang = ?";
        db.query(sqlDelete, MaKhachHang, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Customer;