const {DataTypes, Sequelize} = require('sequelize');
const db = require('./../db/db');
const Tasks = require('./TasksModel');

const TaskLists = db.define('taskLists', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true
});
TaskLists.hasMany(Tasks, {

    foreignKey : {
        allowNull : false,
        name: 'taskList_id'
    },
    sourceKey :'id'
});

module.exports = TaskLists