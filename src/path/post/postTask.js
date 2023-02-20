module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/tasksList/:usersId/:taskslistId', (req, res) => {
        try {
            Tasks.create({
                name: req.body.name,
                description: req.body.description,
                active: true,
                amount: req.body.amount,
                taskList_id: parseInt(req.params.taskslistId)
            }).then(task => {
                res.status(201).send(task)
            })
            }catch (e) {
            console.log(e)
            console.log(e)
            res.status(500).send(e)
        }
    })
}