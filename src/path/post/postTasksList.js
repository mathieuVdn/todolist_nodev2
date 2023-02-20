module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/tasksList/:userId', (req, res) => {
        try {
            TaskLists.create(
                {
                    title: req.body.title,
                    description: req.body.description,
                    userId: req.params.userId
                })
    .then(tasksList => {
                UserTasksLists.create({
                    userId: req.params.userId,
                    taskListId: TaskLists.id
                }   )

        res.status(201).send(tasksList)
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}