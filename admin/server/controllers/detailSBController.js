const DetailSaleBill = require('../model/detailSB');

exports.getDetailSBById = (req, res) => {
    const { MaHDB } = req.params;
    DetailSaleBill.getById(MaHDB, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};