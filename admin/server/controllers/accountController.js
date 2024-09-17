const Account = require('../model/account');

exports.getAllAccounts = (req, res) => {
    Account.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getAccountById = (req, res) => { 
    const { MaTaiKhoan} = req.params;  
    Account.getById(MaTaiKhoan, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createAccount = (req, res) => {
    const accountData = req.body;
    Account.create(accountData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Account added successfully");
    });
};

exports.updateAccount = (req, res) => {
    const { MaTaiKhoan } = req.params;
    const accountData = req.body;
    Account.update(MaTaiKhoan, accountData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Account updated successfully");
    });
};

exports.deleteAccount = (req, res) => {
    const { MaTaiKhoan } = req.params;
    Account.delete(MaTaiKhoan, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Account deleted successfully");
    });
};
