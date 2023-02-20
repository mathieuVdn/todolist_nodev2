const jwt = require('jsonwebtoken')
const privateKey = require('./key')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split("")[1]
        if(!token){
            return res.status(401).json({message: "pas de token"})
        }
        jwt.verify(token, privateKey, (error, decodedToken) =>{
        if(error) {
            return res.status(401).json({message: 'mauvais token'})
        }
        const userId = decodedToken.userId
            if(req.body.userId && req.body.userId !== userId) {
                res.status(401).json({message: "Vous n'êtes pas authentifié"})
            } else {
                next()
            }
    })
} catch (e) {
    res.status(500).send({message: "Vous n'êtes pas authentifié"})
    }
}