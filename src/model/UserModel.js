const {DataTypes, Sequelize} = require('sequelize');
const db = require('./../db/db')
const TaskLists = require('./TaskListsModel')

const Users = db.define('user', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: (true, 'username déja pris')
    },
    mail : {
        type: DataTypes.STRING,
          allowNull: false
    },
    age :{
        type : DataTypes.INTEGER
    },
    password: {
        type : DataTypes.STRING,
        allowNull: false
    }

    },
    {
        timestamps : true,
        createdAt : true,
        updatedAt: false
    }
)
Users.hasMany(TaskLists, {
    foreignKey : {
        allowNull : false,
        name: 'userId'
    },
    sourceKey :'id'
})
module.exports = Users