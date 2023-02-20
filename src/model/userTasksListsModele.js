const {Sequelize, DataTypes} = require('sequelize')
const Users = require('./UserModel')
const TasksLists = require('./TaskListsModel')
const db = require('./../db/db')

const UserTasksLists = db.define('UserTasksLists', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, { timestamps: false });
Users.belongsToMany(TasksLists, { through: 'UserTasksLists' })
TasksLists.belongsToMany(Users, { through: 'UserTasksLists' });

module.exports = UserTasksLists