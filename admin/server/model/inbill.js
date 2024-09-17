const db = require('../config/config');

const InBill = {

    getAll: (callback) => {
        const sqlGet = "SELECT * FROM hoadonnhap";
        db.query(sqlGet, (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

    
};

module.exports = InBill;