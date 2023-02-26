const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const port =  3004;
const db = require('./src/db/db');
const Users = require('./src/model/UserModel')
const TaskLists = require('./src/model/TaskListsModel')
const UserTasksLists = require('./src/model/userTasksListsModele')
const Tasks = require('./src/model/TasksModel')

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

require('./src/path/test')(app);
require('./src/path/get/getTaskByTasklistId')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/get/getAll')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/get/getUsers')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/post/postUser')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/post/postTasksList')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/post/postTask')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/put/putUser')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/put/putTasksList')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/put/putTask')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/delete/deleteUser')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/delete/deleteTasksList')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/delete/deleteTask')(app, Users, Tasks, TaskLists, UserTasksLists);
require('./src/path/get/getTakslistByID')(app, Users, Tasks, TaskLists, UserTasksLists);




require('./src/path/post/login')(app, Users, Tasks, TaskLists, UserTasksLists)



db.sync()
    .then(_ => {
        app.listen(port, () => {
            console.log(`le serveur tourne sur le port ${port}`)
        })

}).catch(err => console.log("erreur" + err))

module.exports = app