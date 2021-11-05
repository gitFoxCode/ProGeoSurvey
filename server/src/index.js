const express = require('express')
const helmet = require('helmet')
const morgan = require("morgan")

const app = express()

app.use(helmet())
app.use(morgan("combined"))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

require("./routes")(app)