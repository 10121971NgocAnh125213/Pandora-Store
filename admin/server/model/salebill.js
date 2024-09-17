const db = require('../config/config');

const SaleBill = {

    getAll: (callback) => {
        const sqlGet = "SELECT * FROM hoadonban";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    getById: (MaHDB, callback) => {
        const sqlGet = "SELECT * FROM hoadonban WHERE MaHDB = ?";
        db.query(sqlGet, [MaHDB], (error, result) => {
            if (error) {
                return callback(errorr);
            }
            callback(null, result);
        });
    },

};

module.exports = SaleBill;