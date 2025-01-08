const Category = require('../models/category');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Category.bulkCreate([
            { name: 'Technology', description: 'Tech-related topics' },
            { name: 'Health', description: 'Health and wellness' },
            { name: 'Education', description: 'Educational resources' }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
