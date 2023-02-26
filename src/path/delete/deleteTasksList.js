module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.delete('/tasksList/:id', (req, res) => {
        try {
            TaskLists.destroy({
                where: {
                    id: req.params.id
                }
            }).then(tasksList => {
                res.status(201).json(tasksList)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}