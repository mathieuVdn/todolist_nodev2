module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.put('/users/:id', (req, res) => {
        try {
            Users.update(req.body,  {
                where: {
                    id: req.params.id
                }
            }).then(user => {
                res.status(201).send(user)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })

}