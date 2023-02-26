const jwt = require('jsonwebtoken')
const privateKey = require('../authentification/key')

const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message : 'pas de token'})
    }
    jwt.verify(token,privateKey,(error,decodedToken)=>{
        console.log('decodes token =>', decodedToken)
        if(error){
            return res.status(401).json({message : 'mauvais token '})
        }
        const userid = decodedToken.userid;
        if(req.body.userid && req.body.userid !== userid){
            res.status(401).json({message:'id incorrect'})
        }else{
            console.log('coucou')
            next();
        }
    })

}
module.exports = auth