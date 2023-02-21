const bcrypt = require('bcrypt')

module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/users', (req, res) => {
        try {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                Users.create({
                    username  : req.body.username,
                    password: hash,
                    mail: req.body.mail,
                    age: req.body.age
                }).then(user => {
                    res.status(201).json(user)
                }).catch(err => {
                    console.log(err)
                    res.status(500).json(err)
                })
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    })
}
