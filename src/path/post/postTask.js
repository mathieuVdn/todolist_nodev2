module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/tasksList/task/:usersId', (req, res) => {
        try {
            console.log(req.body)
            Tasks.create({
                name: req.body.name,
                description: req.body.description,
                active: true,
                amount: req.body.amount,
                taskList_id: req.body.taskList_id
            })
                .then(tasks => {
                res.status(201).json(tasks)
            })
            }catch (e) {
            res.status(500).send(e)
        }
    })
}