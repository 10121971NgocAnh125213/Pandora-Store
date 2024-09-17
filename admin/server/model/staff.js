const db = require('../config/config');

const Staff = {
    getAll: (callback) => {
        const sqlGet = "SELECT * FROM nhanvien";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    getById: (MaNhanVien, callback) => {
        const sqlGet = "SELECT * FROM nhanvien WHERE MaNhanVien = ?";
        db.query(sqlGet, MaNhanVien, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    create: (staffData, callback) => {
        const {TenNhanVien, GioiTinh, NgaySinh, Sdt, DiaChi, HinhAnh} = staffData;
        const sqlInsert = "INSERT INTO nhanvien (TenNhanVien, GioiTinh, NgaySinh, Sdt, DiaChi, HinhAnh) VALUES ( ?, ?, ?, ?, ?, ?)";
        db.query(sqlInsert, [TenNhanVien, GioiTinh, NgaySinh, Sdt, DiaChi, HinhAnh], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    update: (MaNhanVien, staffData, callback) => {
        const {TenNhanVien, GioiTinh, NgaySinh, Sdt, DiaChi, HinhAnh} = staffData;
        const sqlUpdate = "UPDATE nhanvien SET TenNhanVien= ?, GioiTinh= ?, NgaySinh= ?, Sdt= ?, DiaChi= ?, HinhAnh= ? WHERE MaNhanVien = ?";
        db.query(sqlUpdate, [ TenNhanVien, GioiTinh, NgaySinh, Sdt, DiaChi, HinhAnh, MaNhanVien], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },
    delete: (MaNhanVien, callback) => {
        const sqlDelete = "DELETE FROM nhanvien WHERE MaNhanVien = ?";
        db.query(sqlDelete, MaNhanVien, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    }
};

module.exports = Staff;