const Category = require('../models/category');

exports.getAllCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

exports.getCategoryById = async (req, res) => {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
};

exports.createCategory = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: 'Category name is required' });
    }

    const category = await Category.create(req.body);
    res.json(category);
};

exports.updateCategory = async (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: 'Category name is required' });
    }

    await Category.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Category updated' });
};

exports.deleteCategory = async (req, res) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Category deleted' });
};
