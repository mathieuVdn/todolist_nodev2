module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.put('/tasksList/:id', (req, res) => {
        try{
            TaskLists.update(req.body, {
                where: {
                    id: req.params.id
                }
            }).then(tasksList => {
                res.status(201).send(tasksList)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}