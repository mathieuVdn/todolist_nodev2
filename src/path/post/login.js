const bcrypt = require('bcrypt');
const privateKey = require('../../authentification/key')
const jwt = require('jsonwebtoken')

module.exports = (app, Users, Tasks, TaskLists, UserTasksLists) => {
    app.post('/login', (req, res) => {
        try {
            const mail = req.body.mail
            const password = req.body.password
            Users.findOne({
                where: {
                    mail: mail
                }
            }
            ).then(user => {
            if (!user) {
                    res.status(404).send({message:`Aucun utilisateur avec l'adresse mail ${mail}`})
                } else {
                    bcrypt.compare(password, user.password).then(result =>
                    {console.log(result)
                        if (result === true) {
                            const token = jwt.sign({userId: user.id}, privateKey, {expiresIn: '1h'}, (err, token) => {
                                res.json({token})
                            })
                            res.status(201).res.json({message:`${user.mail} Connexion réussie`, token})
                        } else {
                            res.status(404).send({message: "Mot de passe incorrect"})
                        }
                    })
                }
            }
            )
        } catch (e) {
            e.status(500).send(e)
        }
        res.json("test de la route login")
        }
    )
}