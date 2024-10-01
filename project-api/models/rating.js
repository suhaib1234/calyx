const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const Rating = sequelize.define('Rating', {
    project_id: { type: DataTypes.INTEGER, references: { model: 'Project', key: 'id' } },
    ghg_risk_rating: DataTypes.INTEGER,
    sdg_impact_rating: DataTypes.INTEGER,
});

module.exports = Rating;
