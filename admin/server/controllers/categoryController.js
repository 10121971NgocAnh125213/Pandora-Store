const Category = require('../model/category');

exports.getAllCategories = (req, res) => {
    Category.getAll((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.getCategoryById = (req, res) => {
    const { MaDanhMuc} = req.params;
    Category.getById(MaDanhMuc, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send(result);
    });
};

exports.createCategory = (req, res) => {
    const categoryData = req.body;
    Category.create(categoryData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Category added successfully");
    });
};

exports.updateCategory = (req, res) => {
    const { MaDanhMuc} = req.params;
    const categoryData = req.body;
    Category.update(MaDanhMuc, categoryData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Category updated successfully");
    });
};

exports.deleteCategory = (req, res) => {
    const { MaDanhMuc} = req.params;
    Category.delete(MaDanhMuc, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send("Category deleted successfully");
    });
};
