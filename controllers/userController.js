const User = require('../models/user');
const { Op } = require('sequelize');

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, phone, start_date, end_date } = req.body;

        const newUser = await User.create({
            name,
            email,
            phone,
            start_date,
            end_date
        });

        res.status(201).json({
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating user",
            error: error
        });
    }
};


exports.updateUser = async (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    try {
        await User.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'User updated' });
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err });
    }
};

exports.deleteUser = async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: 'User deleted' });
};

exports.getUsersWithPagination = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const offset = parseInt(req.query.offset) || 0;

        console.log('Limit:', limit, 'Offset:', offset);

        const { count, rows } = await User.findAndCountAll({
            limit,
            offset
        });

        res.json({
            total: count,
            data: rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching paginated users', error: err });
    }
};

exports.searchUsers = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) return res.status(400).json({ message: 'Please provide a name to search.' });

        const users = await User.findAll({
            where: { name: { [Op.like]: `%${name}%` } }
        });

        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error searching users', error: err });
    }
};