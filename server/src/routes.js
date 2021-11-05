const Auth = require("./controllers/Auth")
const Post = require("./controllers/Post")

module.exports = (app) =>{
    app.post('/login', Auth.login)

    app.post('/changePassword', Auth.changePassword)

    app.post('/post', Post.add)

    app.delete('/post', Post.delete)

    app.patch('/post', Post.edit)

    app.get('/post', Post.get)
}