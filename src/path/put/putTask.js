module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
        app.put('/tasks/:id', (req, res) => {
        try {
            Tasks.update(req.body, {
                where: {
                    id: req.params.id
                }
            }).then(task => {
                res.status(201).send(task)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}