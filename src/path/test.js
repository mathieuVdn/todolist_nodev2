
const auth = require('../authentification/auth')

module.exports = (app) => {
    app.get('/testauth', auth, async (req,res) =>{
        console.log('toto')
        return res.json({message: 'route test ok'})
    })
}