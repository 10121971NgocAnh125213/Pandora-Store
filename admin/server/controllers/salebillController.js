const SaleBill = require('../model/salebill');

exports.getAllSaleBills = (req, res) => {
    SaleBill.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getSaleBillById = (req, res) => {    //Lấy giá trị MaTaiKhoan từ các tham số của URL.
    const { MaHDB } = req.params;    //chứa các tham số đường dẫn của request
    SaleBill.getById(MaHDB, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};