const auth = require('./auth')

module.exports = (app) => {
    app.get('/test', auth, (req, res) => {
        res.json("test de la route test")
    })
}
