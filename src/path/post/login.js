const bcrypt = require('bcrypt');
const privateKey = require('../../authentification/key')
const jwt = require('jsonwebtoken')


module.exports = (app,Users)=>{
    app.post("/login",(req,res)=>{
        const mail = req.body.mail
        const password = req.body.password
        // ca fais un where à l'interieur va mechercher dans la table celui qui as le mm email
        console.log(mail)
        Users.findOne({
            where: {mail : mail}
        }).then(user => {
            console.log(user)
            if(!user){
                return res.status(404).json({ message : " le user avec l'email "+ mail + " n'existe pas"})
            }
            bcrypt.compare(password,user.password)
                .then(passwordValid => {

                    if(passwordValid === true){
                        console.log(user.id)
                        const token = jwt.sign(
                            {userid : user.id},
                            privateKey,
                            {expiresIn: '1h'}
                        )

                        return res.json({message : `user bien co `, data:user, token})
                    }else{
                        return res.json({message : `mdp incorrect` + mail})
                    }
                })
        })

    })
}

