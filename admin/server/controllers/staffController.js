const Staff = require('../model/staff');

exports.getAllStaffs = (req, res) => {
    Staff.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getStaffById = (req, res) => {
    const { MaNhanVien } = req.params;
    Staff.getById(MaNhanVien, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createStaff = (req, res) => {
    const StaffData = req.body;
    Staff.create(StaffData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Staff added successfully");
    });
};

exports.updateStaff = (req, res) => {
    const { MaNhanVien } = req.params;
    const StaffData = req.body;
    Staff.update(MaNhanVien, StaffData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Staff updated successfully");
    });
};

exports.deleteStaff = (req, res) => {
    const { MaNhanVien } = req.params;
    Staff.delete(MaNhanVien, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Staff deleted successfully");
    });
};
