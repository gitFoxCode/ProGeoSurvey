module.exports = {
    async register (req, res){
        try{
            const user = await User.create(req.body)
            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err){
            res.status(400).send({
                error: `Ten e-mail już istnieje! ${err}`
            })
        }
    }
}