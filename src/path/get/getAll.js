module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.get('/', (req, res) => {
        Users.findAll({
            include: [{
                model: TaskLists,
                include: [{
                    model: Tasks
                }
                ]
            }
            ]
        }).then(users => {
            res.send(users)
        })
    })
}
