module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.get('/:usersId/', (req, res) => {
        TaskLists.findAll({
            where: {
                userId: req.params.usersId
            },
                include: [{
                    model: Tasks,
                    as:"tasks"
                }
            ]
        }).then(tasklist => {
            res.send(tasklist)
        })
    })
}
