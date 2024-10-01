const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const ProjectCreditingPeriod = sequelize.define('ProjectCreditingPeriod', {
    project_id: { type: DataTypes.INTEGER, references: { model: 'Project', key: 'id' } },
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
});

module.exports = ProjectCreditingPeriod;
