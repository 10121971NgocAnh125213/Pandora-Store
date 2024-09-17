const Customer = require('../model/customer');

exports.getAllCustomers = (req, res) => {
    Customer.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getCustomerById = (req, res) => {
    const { MaKhachHang } = req.params;
    Customer.getById(MaKhachHang, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createCustomer = (req, res) => {
    const customerData = req.body;
    Customer.create(customerData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Customer added successfully");
    });
};

exports.updateCustomer = (req, res) => {
    const { MaKhachHang } = req.params;
    const customerData = req.body;
    Customer.update(MaKhachHang, customerData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Customer updated successfully");
    });
};

exports.deleteCustomer = (req, res) => {
    const { MaKhachHang } = req.params;
    Customer.delete(MaKhachHang, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Customer deleted successfully");
    });
};
