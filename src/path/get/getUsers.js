module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.get('/users', (req, res) => {
        try {
            Users.findAll().then(users => {
                res.status(201).send(users)
            })
        } catch (e) {
            console.log(e)
            res.status(500).send(e)
        }
    })
}