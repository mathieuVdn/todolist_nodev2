module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.delete('/users/:id', (req, res) => {
        try {
            Users.destroy({
                where: {
                    id: req.params.id
                }
            }).then(user => {
                res.sendStatus(201).send(user)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
         }
    })
};