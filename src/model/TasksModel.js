const {Sequelize, DataTypes} = require('sequelize');
const db = require('./../db/db');
const TaskLists = require('./TaskListsModel');

const Tasks = db.define('tasks', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    description  : {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

}, {
    timestamps : true,
    createdAt : true,
    updatedAt: false
});


module.exports = Tasks