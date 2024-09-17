const db = require('../config/config');

const Order = {
    addOrder: (orderData, callback) => {
        const { MaKhachHang, TenKhachHang, Sdt, NgayBan, TongTien, ctHDB} = orderData;
        const insertOrderQuery = `
            INSERT INTO hoadonban (MaKhachHang, TenKhachHang, Sdt, NgayBan, TongTien)
            VALUES (?, ?, ?, ?, ?)
        `;

        db.getConnection((err, connection) => {
            if (err) {
                return callback(err);
            }

            connection.beginTransaction((err) => {
                if (err) {
                    connection.release();
                    return callback(err);
                }

                connection.query(
                    insertOrderQuery,
                    [MaKhachHang, TenKhachHang, Sdt, NgayBan, TongTien],
                    (err, result) => {
                        if (err) {
                            return connection.rollback(() => {
                                connection.release();
                                callback(err);
                            });
                        }

                        const MaHDB = result.insertId;  //insertId chứa mã số tự tăng của bản ghi vừa được thêm .
                        const insertOrderDetailsQuery = `
                            INSERT INTO cthoadonban (MaHDB, MaSanPham, TenSanPham, SoLuong, DonGia)
                            VALUES ?
                        `;
                        
                        console.log(ctHDB)
                        const orderDetailsValues = ctHDB?.map((item) => [
                            MaHDB,
                            item.MaSanPham,
                            item.TenSanPham,
                            item.SoLuong,
                            item.DonGia
                        ]);

                        connection.query(insertOrderDetailsQuery, [orderDetailsValues], (err) => {
                            if (err) {
                                return connection.rollback(() => {
                                    connection.release();
                                    callback(err);
                                });
                            }

                            connection.commit((err) => {
                                if (err) {
                                    return connection.rollback(() => {
                                        connection.release();
                                        callback(err);
                                    });
                                }

                                connection.release();
                                callback(null, "Thêm đơn hàng thành công");
                            });
                        });
                    }
                );
            });
        });
    }
};

module.exports = Order;