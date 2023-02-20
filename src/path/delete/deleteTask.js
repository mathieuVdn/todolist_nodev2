module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.delete('/tasks/:id', (req, res) => {
        try {
            Tasks.destroy({
                where: {
                    id: req.params.id
                }
            }).then(task => {
                res.sendStatus(201).send(task)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}