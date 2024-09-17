const InBill = require('../model/inbill');

exports.getAllInBills = (req, res) => {
    InBill.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};


