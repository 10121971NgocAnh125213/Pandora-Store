const db = require('../config/config');

const DetailSB = {

    getById: (MaHDB, callback) => {
        const sqlGet = "SELECT * FROM cthoadonban WHERE MaHDB = ?";
        db.query(sqlGet, [MaHDB], (error, result) => {
            if (error) {
                return callback(error);
            }
            callback(null, result);
        });
    },

};

module.exports = DetailSB;